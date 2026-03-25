import { useState } from "react";
import { Link } from "wouter";
import { Plus, Trash2, FileText, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

interface Medication {
  id: string;
  activeIngredient: string;
  dosageForm: string;
  quantity: string;
  quantityUnit: string;
  directions: string;
  repeats: string;
  schedule: string;
  indication: string;
}

function newMed(): Medication {
  return {
    id: Math.random().toString(36).slice(2),
    activeIngredient: "",
    dosageForm: "",
    quantity: "",
    quantityUnit: "capsules",
    directions: "",
    repeats: "0",
    schedule: "S4",
    indication: "",
  };
}

export default function Prescribers() {
  const [medications, setMedications] = useState<Medication[]>([newMed()]);
  const [prescriber, setPrescriber] = useState({
    prescriberName: "", prescriberNumber: "", qualifications: "",
    practiceName: "", practicePhone: "", practiceEmail: "", practiceAddress: ""
  });
  const [patient, setPatient] = useState({
    patientName: "", patientDob: "", patientPhone: "",
    patientAddress: "", medicareNumber: "", allergies: "", specialInstructions: ""
  });
  const [prescriptionDate, setPrescriptionDate] = useState(new Date().toISOString().split("T")[0]);

  const addMed = () => setMedications((m) => [...m, newMed()]);
  const removeMed = (id: string) =>
    setMedications((m) => m.filter((med) => med.id !== id));
  const updateMed = (id: string, field: keyof Medication, value: string) =>
    setMedications((m) =>
      m.map((med) => (med.id === id ? { ...med, [field]: value } : med))
    );

  const submitMutation = trpc.prescriptions.submit.useMutation({
    onSuccess: () => {
      toast.success("Prescription submitted to Burke Road Pharmacy!");
    },
    onError: (err) => {
      toast.error("Submission failed. Please call (03) 9889 8622.");
      console.error(err);
    },
  });

  const handleSubmit = () => {
    submitMutation.mutate({
      ...prescriber,
      ...patient,
      medications: JSON.stringify(medications),
      prescriptionDate,
    });
  };

  const handlePrint = () => {
    toast.success("Opening print dialog…");
    window.print();
  };

  return (
    <div className="bg-[#f9fafb]">
      {/* Header */}
      <div className="brp-gradient py-12 text-white">
        <div className="container">
          <Link href="/" className="text-white/70 hover:text-white text-sm mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1
            className="text-4xl font-bold mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Prescribers Portal
          </h1>
          <p className="text-white/85">
            Compounding Prescription Generator — for registered healthcare providers only.
          </p>
        </div>
      </div>

      <div className="container py-10 max-w-4xl">
        {/* Intro */}
        <div className="bg-[#f0f7f4] border border-[#2d6a4f]/30 rounded-xl p-5 mb-8">
          <h2
            className="text-lg font-bold text-[#2d6a4f] mb-1"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Compounding Prescription Generator
          </h2>
          <p className="text-gray-700 text-sm">
            Complete the form below to generate a compounding prescription. All fields marked
            with <span className="text-red-500">*</span> are required. This tool is for
            registered Australian healthcare providers only.
          </p>
        </div>

        {/* Prescriber Details */}
        <section className="bg-white rounded-xl p-6 shadow-sm border border-border mb-6">
          <h3 className="text-base font-semibold uppercase tracking-wide text-gray-700 pb-3 border-b border-[#f0f7f4] mb-5">
            Prescriber Details
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {([
              { id: "prescriberName", label: "Prescriber Name", required: true },
              { id: "prescriberNumber", label: "Prescriber Number", required: true },
              { id: "qualifications", label: "Qualifications", required: true },
              { id: "practiceName", label: "Practice Name", required: true },
              { id: "practicePhone", label: "Practice Phone", required: true },
              { id: "practiceEmail", label: "Practice Email", required: false },
            ] as { id: keyof typeof prescriber; label: string; required: boolean }[]).map((f) => (
              <div key={f.id}>
                <Label htmlFor={f.id} className="text-sm font-medium text-gray-700">
                  {f.label} {f.required && <span className="text-red-500">*</span>}
                </Label>
                <Input
                  id={f.id}
                  className="mt-1"
                  value={prescriber[f.id]}
                  onChange={e => setPrescriber(p => ({...p, [f.id]: e.target.value}))}
                />
              </div>
            ))}
            <div className="md:col-span-2">
              <Label htmlFor="practiceAddress" className="text-sm font-medium text-gray-700">
                Practice Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="practiceAddress"
                className="mt-1"
                value={prescriber.practiceAddress}
                onChange={e => setPrescriber(p => ({...p, practiceAddress: e.target.value}))}
              />
            </div>
          </div>
        </section>

        {/* Patient Details */}
        <section className="bg-white rounded-xl p-6 shadow-sm border border-border mb-6">
          <h3 className="text-base font-semibold uppercase tracking-wide text-gray-700 pb-3 border-b border-[#f0f7f4] mb-5">
            Patient Details
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {([
              { id: "patientName", label: "Patient Full Name", required: true },
              { id: "patientDob", label: "Date of Birth", required: true, type: "date" },
              { id: "patientPhone", label: "Patient Phone (Primary)", required: true },
              { id: "medicareNumber", label: "Medicare Number", required: false },
            ] as { id: keyof typeof patient; label: string; required: boolean; type?: string }[]).map((f) => (
              <div key={f.id}>
                <Label htmlFor={f.id} className="text-sm font-medium text-gray-700">
                  {f.label} {f.required && <span className="text-red-500">*</span>}
                </Label>
                <Input
                  id={f.id}
                  type={f.type || "text"}
                  className="mt-1"
                  value={patient[f.id]}
                  onChange={e => setPatient(p => ({...p, [f.id]: e.target.value}))}
                />
              </div>
            ))}
            <div className="md:col-span-2">
              <Label htmlFor="patientAddress" className="text-sm font-medium text-gray-700">
                Patient Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="patientAddress"
                className="mt-1"
                value={patient.patientAddress}
                onChange={e => setPatient(p => ({...p, patientAddress: e.target.value}))}
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="allergies" className="text-sm font-medium text-gray-700">
                Known Allergies / Sensitivities
              </Label>
              <Textarea
                id="allergies"
                className="mt-1"
                rows={2}
                value={patient.allergies}
                onChange={e => setPatient(p => ({...p, allergies: e.target.value}))}
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="specialInstructions" className="text-sm font-medium text-gray-700">
                Special Instructions / Patient Preferences
              </Label>
              <Textarea
                id="specialInstructions"
                className="mt-1"
                rows={2}
                value={patient.specialInstructions}
                onChange={e => setPatient(p => ({...p, specialInstructions: e.target.value}))}
              />
            </div>
          </div>
        </section>

        {/* Medications */}
        {medications.map((med, idx) => (
          <section key={med.id} className="bg-white rounded-xl p-6 shadow-sm border border-border mb-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#f0f7f4] mb-5">
              <h3 className="text-base font-semibold uppercase tracking-wide text-gray-700">
                Medication {idx + 1}
              </h3>
              {medications.length > 1 && (
                <button
                  onClick={() => removeMed(med.id)}
                  className="text-red-500 hover:text-red-700 flex items-center gap-1 text-sm"
                >
                  <Trash2 className="w-4 h-4" /> Remove
                </button>
              )}
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <Label className="text-sm font-medium text-gray-700">
                  Active Ingredient(s) &amp; Strength <span className="text-red-500">*</span>
                </Label>
                <Input
                  value={med.activeIngredient}
                  onChange={(e) => updateMed(med.id, "activeIngredient", e.target.value)}
                  placeholder="e.g., Progesterone 100mg"
                  className="mt-1"
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-700">
                  Dosage Form <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={med.dosageForm}
                  onValueChange={(v) => updateMed(med.id, "dosageForm", v)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select form…" />
                  </SelectTrigger>
                  <SelectContent>
                    {["Capsule", "Tablet / Troche", "Oral Liquid", "Cream", "Ointment", "Gel (Topical)", "PLO Gel", "Lotion", "Suppository", "Pessary", "Eye / Ear / Nasal Drops", "Powder", "Veterinary Formulation", "Other"].map((f) => (
                      <SelectItem key={f} value={f}>{f}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-700">
                  Schedule <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={med.schedule}
                  onValueChange={(v) => updateMed(med.id, "schedule", v)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="S4">S4 (Prescription Only)</SelectItem>
                    <SelectItem value="S8">S8 (Controlled Drug)</SelectItem>
                    <SelectItem value="S3">S3 (Pharmacist Only)</SelectItem>
                    <SelectItem value="Unscheduled">Unscheduled / Nutritional</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-700">
                  Quantity <span className="text-red-500">*</span>
                </Label>
                <div className="flex gap-2 mt-1">
                  <Input
                    value={med.quantity}
                    onChange={(e) => updateMed(med.id, "quantity", e.target.value)}
                    placeholder="e.g., 60"
                    className="w-24"
                  />
                  <Select
                    value={med.quantityUnit}
                    onValueChange={(v) => updateMed(med.id, "quantityUnit", v)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {["capsules", "tablets", "g", "mL", "suppositories", "units"].map((u) => (
                        <SelectItem key={u} value={u}>{u}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-700">
                  Number of Repeats
                </Label>
                <Input
                  value={med.repeats}
                  onChange={(e) => updateMed(med.id, "repeats", e.target.value)}
                  type="number"
                  min="0"
                  className="mt-1"
                />
              </div>
              <div className="md:col-span-2">
                <Label className="text-sm font-medium text-gray-700">
                  Directions for Use <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  value={med.directions}
                  onChange={(e) => updateMed(med.id, "directions", e.target.value)}
                  placeholder="e.g., Apply 1 pump to inner wrist each morning"
                  className="mt-1"
                  rows={2}
                />
              </div>
              <div className="md:col-span-2">
                <Label className="text-sm font-medium text-gray-700">
                  Clinical Indication / Justification for Compounding
                </Label>
                <Textarea
                  value={med.indication}
                  onChange={(e) => updateMed(med.id, "indication", e.target.value)}
                  className="mt-1"
                  rows={2}
                />
              </div>
            </div>
          </section>
        ))}

        <button
          onClick={addMed}
          className="flex items-center gap-2 text-[#1a4d2e] font-semibold text-sm mb-8 hover:text-[#2d6a4f]"
        >
          <Plus className="w-5 h-5" /> Add Another Medication
        </button>

        {/* Declaration */}
        <section className="bg-white rounded-xl p-6 shadow-sm border border-border mb-8">
          <h3 className="text-base font-semibold uppercase tracking-wide text-gray-700 pb-3 border-b border-[#f0f7f4] mb-5">
            Prescriber Declaration &amp; Signature
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="prescriptionDate" className="text-sm font-medium text-gray-700">
                Prescription Date <span className="text-red-500">*</span>
              </Label>
              <Input
                id="prescriptionDate"
                type="date"
                value={prescriptionDate}
                onChange={e => setPrescriptionDate(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="signatureType" className="text-sm font-medium text-gray-700">
                Signature Type
              </Label>
              <Select defaultValue="digital">
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="digital">Digital Signature</SelectItem>
                  <SelectItem value="wet">Wet Signature (print and sign)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            This prescription is valid for dispensing within 12 months of the date written,
            unless otherwise specified. For controlled drugs (S8), state/territory time limits
            apply (typically 6 months maximum).
          </p>
        </section>

        {/* Actions */}
        <div className="flex flex-wrap gap-4">
          <Button
            onClick={handleSubmit}
            disabled={submitMutation.isPending}
            className="flex items-center gap-2 bg-[#2d6a4f] hover:bg-[#1a4d2e] text-white px-8 py-3"
          >
            <Send className="w-5 h-5" /> {submitMutation.isPending ? "Submitting..." : "Submit to Pharmacy"}
          </Button>
          <Button
            onClick={handlePrint}
            variant="outline"
            className="flex items-center gap-2 border-[#1a4d2e] text-[#1a4d2e] px-8 py-3"
          >
            <FileText className="w-5 h-5" /> Generate &amp; Print
          </Button>
          <a
            href="tel:0398898622"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#f0f7f4] hover:bg-[#e0f0e8] text-[#1a4d2e] font-semibold rounded-lg border border-[#2d6a4f]/20 transition-all text-sm"
          >
            📞 Call for Assistance
          </a>
        </div>
      </div>
    </div>
  );
}
