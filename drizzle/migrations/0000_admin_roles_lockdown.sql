CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');
CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role public.app_role NOT NULL,
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own roles" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$ SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role) $$;

INSERT INTO public.user_roles (user_id, role) VALUES ('48db8f35-208f-4021-8258-86557240246f', 'admin') ON CONFLICT DO NOTHING;

DROP POLICY IF EXISTS "Admins can delete bookings" ON public.bookings;
DROP POLICY IF EXISTS "Admins can update bookings" ON public.bookings;
DROP POLICY IF EXISTS "Admins can view all bookings" ON public.bookings;
DROP POLICY IF EXISTS "Anyone can create booking requests" ON public.bookings;
CREATE POLICY "Admins can delete bookings" ON public.bookings FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update bookings" ON public.bookings FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can view all bookings" ON public.bookings FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Anyone can create booking requests" ON public.bookings FOR INSERT TO anon, authenticated
WITH CHECK (status = 'new' AND length(pickup_location) BETWEEN 1 AND 500 AND length(dropoff_location) BETWEEN 1 AND 500 AND (notes IS NULL OR length(notes) <= 2000));

DROP POLICY IF EXISTS "Admins can view contact messages" ON public.contact_messages;
DROP POLICY IF EXISTS "Anyone can submit contact messages" ON public.contact_messages;
CREATE POLICY "Admins can view contact messages" ON public.contact_messages FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Anyone can submit contact messages" ON public.contact_messages FOR INSERT TO anon, authenticated
WITH CHECK (length(name) BETWEEN 1 AND 200 AND length(email) BETWEEN 3 AND 320 AND length(message) BETWEEN 1 AND 5000 AND (phone IS NULL OR length(phone) <= 50));