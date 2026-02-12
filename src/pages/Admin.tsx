"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, Search, Award, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { useScholarships } from "@/contexts/ScholarshipContext";
import { Scholarship, categories } from "@/data/scholarships";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const emptyForm = {
  title: "",
  organization: "",
  country: "",
  level: "",
  field: "",
  category: "",
  deadline: "",
  description: "",
  link: "",
};

const Admin = () => {
  const { scholarships, addScholarship, updateScholarship, deleteScholarship, filterOptions } = useScholarships();
  const { toast } = useToast();
  const [search, setSearch] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const filtered = scholarships.filter(
    (s) =>
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.organization.toLowerCase().includes(search.toLowerCase())
  );

  const openAdd = () => {
    setEditingId(null);
    setForm(emptyForm);
    setFormOpen(true);
  };

  const openEdit = (s: Scholarship) => {
    setEditingId(s.id);
    setForm({
      title: s.title,
      organization: s.organization,
      country: s.country,
      level: s.level,
      field: s.field,
      category: s.category,
      deadline: s.deadline,
      description: s.description,
      link: s.link,
    });
    setFormOpen(true);
  };

  const openDelete = (id: string) => {
    setDeletingId(id);
    setDeleteOpen(true);
  };

  const handleSave = async () => {
    if (!form.title || !form.organization || !form.country || !form.level || !form.field || !form.category || !form.deadline) {
      toast({ title: "Missing fields", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    setSaving(true);
    try {
      if (editingId !== null) {
        await updateScholarship(editingId, form);
        toast({ title: "Updated", description: "Scholarship updated successfully." });
      } else {
        await addScholarship(form);
        toast({ title: "Added", description: "Scholarship added successfully." });
      }
      setFormOpen(false);
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (deletingId !== null) {
      try {
        await deleteScholarship(deletingId);
        toast({ title: "Deleted", description: "Scholarship removed." });
      } catch (err: any) {
        toast({ title: "Error", description: err.message, variant: "destructive" });
      }
    }
    setDeleteOpen(false);
    setDeletingId(null);
  };

  const updateField = (key: string, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Admin Panel - ScholarBridge.com | Manage Scholarships</title>
        <meta name="description" content="Admin panel for managing scholarships on ScholarBridge.com. Add, edit, and delete scholarship listings." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Header />
      <div className="container py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                <Link href="/"><ArrowLeft className="h-4 w-4" /></Link>
              </Button>
              <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Admin Panel
              </h1>
            </div>
            <p className="text-muted-foreground text-sm ml-10">
              Manage all scholarships — {scholarships.length} total
            </p>
          </div>
          <Button onClick={openAdd} className="gap-2">
            <Plus className="h-4 w-4" />
            Add Scholarship
          </Button>
        </div>

        {/* Search */}
        <div className="relative mb-6 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by title or organization..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>

        {/* Table */}
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold">Title</TableHead>
                  <TableHead className="font-semibold">Organization</TableHead>
                  <TableHead className="font-semibold hidden md:table-cell">Country</TableHead>
                  <TableHead className="font-semibold hidden md:table-cell">Level</TableHead>
                  <TableHead className="font-semibold hidden lg:table-cell">Category</TableHead>
                  <TableHead className="font-semibold hidden lg:table-cell">Deadline</TableHead>
                  <TableHead className="font-semibold text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-12 text-muted-foreground">
                      No scholarships found.
                    </TableCell>
                  </TableRow>
                ) : (
                  filtered.map((s) => (
                    <TableRow key={s.id} className="hover:bg-muted/30 transition-colors">
                      <TableCell className="font-medium max-w-[200px] truncate">{s.title}</TableCell>
                      <TableCell className="text-muted-foreground">{s.organization}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        <Badge variant="outline" className="text-xs">{s.country}</Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <Badge variant="secondary" className="text-xs">{s.level}</Badge>
                      </TableCell>
                      <TableCell className="hidden lg:table-cell">
                        <Badge className="text-xs bg-primary/10 text-primary border-0">{s.category}</Badge>
                      </TableCell>
                      <TableCell className="hidden lg:table-cell text-muted-foreground text-sm">{s.deadline}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(s)}>
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive" onClick={() => openDelete(s.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Add/Edit Dialog */}
      <Dialog open={formOpen} onOpenChange={setFormOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingId !== null ? "Edit Scholarship" : "Add Scholarship"}</DialogTitle>
            <DialogDescription>
              {editingId !== null ? "Update the scholarship details below." : "Fill in the details to add a new scholarship."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-2">
            <div className="grid gap-2">
              <Label>Title *</Label>
              <Input value={form.title} onChange={(e) => updateField("title", e.target.value)} placeholder="Scholarship title" />
            </div>
            <div className="grid gap-2">
              <Label>Organization *</Label>
              <Input value={form.organization} onChange={(e) => updateField("organization", e.target.value)} placeholder="University or organization" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label>Country *</Label>
                <Select value={form.country} onValueChange={(v) => updateField("country", v)}>
                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>
                    {[...new Set([...filterOptions.countries, "Germany", "USA", "Canada", "UK", "Australia"])].map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Level *</Label>
                <Select value={form.level} onValueChange={(v) => updateField("level", v)}>
                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>
                    {[...new Set([...filterOptions.levels, "Bachelor", "Master", "PhD", "Postdoctoral"])].map((l) => (
                      <SelectItem key={l} value={l}>{l}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label>Field *</Label>
                <Select value={form.field} onValueChange={(v) => updateField("field", v)}>
                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>
                    {[...new Set([...filterOptions.fields, "Computer Science", "Engineering", "Arts", "Business", "Medicine"])].map((f) => (
                      <SelectItem key={f} value={f}>{f}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Category *</Label>
                <Select value={form.category} onValueChange={(v) => updateField("category", v)}>
                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>
                    {categories.map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-2">
              <Label>Deadline *</Label>
              <Input type="date" value={form.deadline} onChange={(e) => updateField("deadline", e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label>Application Link</Label>
              <Input value={form.link} onChange={(e) => updateField("link", e.target.value)} placeholder="https://..." />
            </div>
            <div className="grid gap-2">
              <Label>Description</Label>
              <Textarea value={form.description} onChange={(e) => updateField("description", e.target.value)} placeholder="Scholarship description..." rows={3} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setFormOpen(false)}>Cancel</Button>
            <Button onClick={handleSave} disabled={saving}>{saving ? "Saving..." : editingId !== null ? "Save Changes" : "Add Scholarship"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <AlertDialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Scholarship?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. The scholarship will be permanently removed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Admin;
