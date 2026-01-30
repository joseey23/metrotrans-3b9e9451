import { useState } from "react";
import { MapPin } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface LocationSelectProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  error?: string;
  required?: boolean;
}

const LocationSelect = ({
  label,
  placeholder,
  value,
  onChange,
  options,
  error,
  required = false,
}: LocationSelectProps) => {
  const [isManual, setIsManual] = useState(false);
  const MANUAL_ENTRY = "__MANUAL_ENTRY__";

  const handleSelectChange = (selected: string) => {
    if (selected === MANUAL_ENTRY) {
      setIsManual(true);
      onChange("");
    } else {
      setIsManual(false);
      onChange(selected);
    }
  };

  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">
        {label} {required && "*"}
      </label>
      {isManual ? (
        <div className="space-y-2">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="pl-10"
              required={required}
            />
          </div>
          <button
            type="button"
            onClick={() => {
              setIsManual(false);
              onChange("");
            }}
            className="text-xs text-primary hover:underline"
          >
            ← Choose from list
          </button>
        </div>
      ) : (
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10 pointer-events-none" />
          <Select value={value} onValueChange={handleSelectChange}>
            <SelectTrigger className="pl-10 bg-background">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="bg-background z-50">
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
              <SelectItem value={MANUAL_ENTRY} className="text-primary font-medium">
                ✏️ Enter address manually
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
      {error && <p className="text-destructive text-xs mt-1">{error}</p>}
    </div>
  );
};

export default LocationSelect;
