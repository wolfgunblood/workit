
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { FileText, Copyright, AlertTriangle, Scale, Globe, ArrowBigLeft } from "lucide-react"

export default function TermsAndConditions() {
    // Object to store company data
    const tosData = {
        companyName: "Your Company Name", // Replace with your dynamic company name
        websiteURL: "www.yourwebsite.com", // Replace with your website URL
        lastUpdatedDate: "September 4, 2024", // Replace with the actual last updated date
        countryOrState: "[Your Country/State]", // Replace with your country or state
    }

    // Object to store the sections of the terms
    const sectionsData = [
        {
            icon: <FileText className="w-6 h-6 text-primary" />,
            title: "1. Agreement to Terms",
            content:
                "By accessing our website, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the website.",
        },
        {
            icon: <Copyright className="w-6 h-6 text-primary" />,
            title: "2. Intellectual Property",
            content: "The content on this Website, unless otherwise specified, is owned by " + tosData.companyName + " and is protected by copyright and other intellectual property laws.",
        },
        {
            icon: <AlertTriangle className="w-6 h-6 text-primary" />,
            title: "3. Restrictions",
            content:
                "You are restricted from: publishing our material elsewhere, selling our material, or using this Website in any way that causes damage to the Website or impairs user access.",
        },
        {
            icon: <Scale className="w-6 h-6 text-primary" />,
            title: "4. Limitation of Liability",
            content: tosData.companyName + " shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Website.",
        },
    ]

    const governingLawSection = {
        icon: <Globe className="w-6 h-6 text-primary" />,
        title: "5. Governing Law",
        content: "These Terms shall be governed by and construed in accordance with the laws of " + tosData.countryOrState + ". Any disputes relating to these Terms will be subject to the exclusive jurisdiction of the courts of " + tosData.countryOrState + ".",
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto mb-4">
                <Link href="/" >
                    <Button variant="ghost"><ArrowBigLeft /></Button>
                </Link>
            </div>
            <Card className="max-w-4xl mx-auto">
                <CardHeader className="text-center">
                    <CardTitle className="text-4xl font-bold">Terms and Conditions</CardTitle>
                    <p className="text-muted-foreground mt-2">Last updated: {tosData.lastUpdatedDate}</p>
                </CardHeader>
                <CardContent className="prose max-w-none">
                    <p className="lead text-xl text-muted-foreground mb-6">
                        Please read these Terms and Conditions carefully before using the {tosData.websiteURL} website operated by {tosData.companyName}.
                    </p>

                    <div className="grid gap-8 md:grid-cols-2">
                        {sectionsData.map((section, index) => (
                            <section key={index}>
                                <div className="flex items-center gap-2 mb-4">
                                    {section.icon}
                                    <h2 className="text-2xl font-semibold">{section.title}</h2>
                                </div>
                                <p>{section.content}</p>
                            </section>
                        ))}
                    </div>

                    <section className="mt-8">
                        <div className="flex items-center gap-2 mb-4">
                            {governingLawSection.icon}
                            <h2 className="text-2xl font-semibold">{governingLawSection.title}</h2>
                        </div>
                        <p>{governingLawSection.content}</p>
                    </section>
                </CardContent>
            </Card>
            <div className="mt-8 text-center">
                <Link href="/privacy-policy">
                    <Button variant="outline" size="lg">View Privacy Policy</Button>
                </Link>
            </div>
        </div>
    )
}
