import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ConfigFormProps {
    onStart: (config: any) => void;
}

const ROLES = ["Frontend Developer", "Backend Developer", "Full Stack Developer", "DevOps Engineer", "System Design Engineer"];
const LEVELS = ["Junior", "Mid-Level", "Senior", "Lead"];

export const ConfigurationForm = ({ onStart }: ConfigFormProps) => {
    const [role, setRole] = useState("");
    const [level, setLevel] = useState("");

    return (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex-1 flex items-center justify-center p-6">
            <Card className="bg-black/40 p-10 max-w-md w-full border-white/10 backdrop-blur-2xl">
                <h2 className="text-3xl font-bold mb-8 text-white text-center">Setup Interview</h2>

                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm text-zinc-400">Target Role</label>
                        <Select onValueChange={setRole}>
                            <SelectTrigger className="bg-white/5 border-white/10 text-white h-12">
                                <SelectValue placeholder="Select Role" />
                            </SelectTrigger>
                            <SelectContent>
                                {ROLES.map(r => <SelectItem key={r} value={r}>{r}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-zinc-400">Experience Level</label>
                        <Select onValueChange={setLevel}>
                            <SelectTrigger className="bg-white/5 border-white/10 text-white h-12">
                                <SelectValue placeholder="Select Level" />
                            </SelectTrigger>
                            <SelectContent>
                                {LEVELS.map(l => <SelectItem key={l} value={l}>{l}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>

                    <Button
                        onClick={() => onStart({ role, level })}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6 text-lg rounded-xl mt-4"
                        disabled={!role || !level}
                    >
                        Begin Assessment
                    </Button>
                </div>
            </Card>
        </motion.div>
    );
};
