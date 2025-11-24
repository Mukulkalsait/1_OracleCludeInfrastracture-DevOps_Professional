import express, { Request, Response } from "express";
import Contact from "../models/Contact";
import { auth } from "../middleware/auth";

const router = express.Router();

// Get all contacts
router.get("/", auth, async (req: Request, res: Response) => {
  try {
    const contacts = await Contact.find({ user: req.user!.id });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Add new contact
router.post("/", auth, async (req: Request, res: Response) => {
  const { name, email, phone } = req.body;
  try {
    const newContact = new Contact({
      name,
      email,
      phone,
      user: req.user!.id,
    });
    const contact = await newContact.save();
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Update contact
router.put("/:id", auth, async (req: Request, res: Response) => {
  const { name, email, phone } = req.body;
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    if (contact.user.toString() !== req.user!.id) {
      return res.status(401).json({ message: "Not authorized" });
    }
    contact.name = name || contact.name;
    contact.email = email || contact.email;
    contact.phone = phone || contact.phone;
    const updatedContact = await contact.save();
    res.json(updatedContact);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Delete contact
router.delete("/:id", auth, async (req: Request, res: Response) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    if (contact.user.toString() !== req.user!.id) {
      return res.status(401).json({ message: "Not authorized" });
    }
    await contact.deleteOne();
    res.json({ message: "Contact removed" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
