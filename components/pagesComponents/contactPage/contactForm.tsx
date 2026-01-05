"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { motion, Variants, useReducedMotion } from "framer-motion";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const reduceMotion = useReducedMotion();

  /* ================= Variants ================= */

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const field: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45 },
    },
  };

  const submitBtn: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45 },
    },
    tap: {
      scale: 0.97,
      transition: { duration: 0.1 },
    },
  };

  const success: Variants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const motionProps = reduceMotion
    ? { initial: "visible" as const, animate: "visible" as const }
    : { initial: "hidden" as const, animate: "visible" as const };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="border bg-background p-8 md:p-12">
      {isSubmitted ? (
        /* ================= Success State ================= */
        <motion.div
          className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
          variants={success}
          {...motionProps}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 14 }}
          >
            <CheckCircle2 className="h-20 w-20 text-foreground" />
          </motion.div>

          <div className="space-y-2">
            <h3 className="text-3xl font-black tracking-tighter uppercase">
              Message Sent.
            </h3>
            <p className="text-muted-foreground">
              Our team will review your request and get back to you within 24
              hours.
            </p>
          </div>

          <motion.div whileTap={{ scale: 0.96 }}>
            <Button
              variant="outline"
              onClick={() => setIsSubmitted(false)}
              className="font-bold bg-transparent"
            >
              Send Another Message
            </Button>
          </motion.div>
        </motion.div>
      ) : (
        /* ================= Form ================= */
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          variants={container}
          {...motionProps}
        >
          <motion.div className="space-y-2" variants={field}>
            <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">
              Name
            </label>
            <motion.div whileFocus={{ scale: 1.01 }}>
              <Input
                required
                placeholder="Your Name"
                className="h-12 rounded-none border-foreground/20"
              />
            </motion.div>
          </motion.div>

          <motion.div className="space-y-2" variants={field}>
            <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">
              Email
            </label>
            <motion.div whileFocus={{ scale: 1.01 }}>
              <Input
                required
                type="email"
                placeholder="email@example.com"
                className="h-12 rounded-none border-foreground/20"
              />
            </motion.div>
          </motion.div>

          <motion.div className="space-y-2" variants={field}>
            <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">
              Service Type
            </label>
            <Select required>
              <SelectTrigger className="h-12 rounded-none border-foreground/20 w-full">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="websites">Websites</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="ai">AI Automation</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>

          <motion.div className="space-y-2" variants={field}>
            <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">
              Message
            </label>
            <motion.div whileFocus={{ scale: 1.01 }}>
              <Textarea
                required
                placeholder="Tell us about your project"
                className="min-h-[150px] rounded-none border-foreground/20"
              />
            </motion.div>
          </motion.div>

          <motion.div variants={submitBtn} whileTap="tap">
            <Button
              type="submit"
              className="w-full h-14 font-black uppercase tracking-widest text-lg"
            >
              Submit
            </Button>
          </motion.div>
        </motion.form>
      )}
    </div>
  );
}
