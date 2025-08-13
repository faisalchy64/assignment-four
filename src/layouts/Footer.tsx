import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-5 border-t">
      <p className="w-4/5 flex justify-center items-center gap-1 text-sm mx-auto">
        LMS <Copyright size={16} /> 2025. All Rights Reserved.
      </p>
    </footer>
  );
}
