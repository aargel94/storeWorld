import {Hero} from "app/components/home/hero";
import {Descriptions} from "app/components/home/descriptions";
import React from "react";

export default function HomeLayout({children}: {children: React.ReactNode}) {
    return(
        <div>
            <Hero/>
            <Descriptions/>
            {children}
        </div>
    )

}