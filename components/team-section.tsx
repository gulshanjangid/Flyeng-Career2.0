"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const team = [
    {
        name: "Aarav Patel",
        role: "Founder & CEO",
        bio: "Visionary leader with a passion for ed-tech and AI.",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
        name: "Ipsita Roy",
        role: "Chief AI Officer",
        bio: "Ex-Google engineer architecting the future of career matching.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
        name: "Rohan Gupta",
        role: "Head of Product",
        bio: "Obsessed with creating frictionless, beautiful user experiences.",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
];

export function TeamSection() {
    return (
        <section className="py-20 relative z-10">
            <div className="container mx-auto px-4">
                 <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Meet the Visionaries</h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        The minds behind the machine. We are a diverse team of dreamers, doers, and relentless innovators.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {team.map((member, i) => (
                         <CardContainer key={i} className="inter-var">
                         <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                           <CardItem
                             translateZ="50"
                             className="text-xl font-bold text-neutral-600 dark:text-white"
                           >
                             {member.name}
                           </CardItem>
                           <CardItem
                             as="p"
                             translateZ="60"
                             className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                           >
                             {member.role}
                           </CardItem>
                           <CardItem translateZ="100" className="w-full mt-4">
                             <Image
                               src={member.image}
                               height="1000"
                               width="1000"
                               className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                               alt={member.name}
                             />
                           </CardItem>
                           <div className="flex justify-between items-center mt-20">
                             <CardItem
                               translateZ={20}
                               as="p"
                               className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                             >
                               {member.bio}
                             </CardItem>
                           </div>
                         </CardBody>
                       </CardContainer>
                    ))}
                </div>
            </div>
        </section>
    );
}
