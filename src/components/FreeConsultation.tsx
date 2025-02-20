"use client";
import Typography from "./Typography";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function FreeConsultation() {
  // async function action(formData: FormData) {
  //   const data = {
  //     full_name: formData.get("full_name"),
  //     company: formData.get("company"),
  //     phone: formData.get("phone"),
  //   };
  // }
  return (
    <section className="px-5 mx-auto max-w-7xl mt-24 lg:mt-40">
      <Typography type="h2" className="text-center">
        Darmowa konsultacja
      </Typography>

      <form
        // @ts-expect-error action is not defined
        action={action}
        className="space-y-5 mx-auto max-w-md bg-gray-50/40 rounded-2xl p-7 md:p-10 mt-10 lg:mt-14"
      >
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="full_name">Imię i nazwisko*</Label>
          <Input
            type="text"
            name="full_name"
            id="full_name"
            placeholder="Marcin Zogrodnik"
            className="shadow-none h-12 bg-white"
            required
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="company">Nazwa firmy</Label>
          <Input
            type="text"
            name="company"
            id="company"
            placeholder="Mediwell"
            className="shadow-none h-12 bg-white"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="phone">Numer telefonu*</Label>
          <Input
            type="number"
            name="phone"
            id="phone"
            placeholder="739907919"
            className="shadow-none h-12 bg-white"
            required
          />
        </div>

        <div className="flex justify-center">
          <Button variant="primary" size="primary">
            Umów się na konsultację
          </Button>
        </div>
      </form>
    </section>
  );
}
