import { Badge } from "@/components/ui/badge";

export default function Book() {
  return (
    <main className="w-4/5 py-10 mx-auto">
      <h3 className="text-2xl">The Theory of Everything</h3>
      <div className="flex items-center gap-3.5 my-1.5">
        <span className="text-sm">Stephen Hawking,</span>
        <Badge>SCIENCE</Badge>
      </div>

      <div className="py-5">
        <h4 className="font-semibold">Description</h4>
        <p className="text-sm text-gray-400">
          An overview of cosmology and black holes.
        </p>
      </div>

      <div className="flex items-center gap-3.5">
        <p className="text-sm">ISBN: 9780553380163,</p>
        <p className="text-sm">Copies Available: 2</p>
      </div>
    </main>
  );
}
