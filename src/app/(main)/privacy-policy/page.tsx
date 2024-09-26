
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Shield, Eye, Users, Bell, Mail, ArrowBigLeft } from "lucide-react"

export default function PrivacyPolicy() {
    // Object containing company name and last updated date
    const privacyData = {
        companyName: "Your Company Name", // Replace with your dynamic company name
        lastUpdatedDate: "September 4, 2024", // Replace with the actual last updated date
        contactInfo: "[Your Contact Information]", // Replace with your dynamic contact information
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
                    <CardTitle className="text-4xl font-bold">Privacy Policy</CardTitle>
                    <p className="text-muted-foreground mt-2">Last updated: {privacyData.lastUpdatedDate}</p>
                </CardHeader>
                <CardContent className="prose max-w-none">
                    <p className="lead text-xl text-muted-foreground mb-6">
                        At {privacyData.companyName}, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
                    </p>

                    <div className="grid gap-8 md:grid-cols-2">
                        <section>
                            <div className="flex items-center gap-2 mb-4">
                                <Shield className="w-6 h-6 text-primary" />
                                <h2 className="text-2xl font-semibold">Information We Collect</h2>
                            </div>
                            <p>
                                We collect personal information that you provide to us, including but not limited to your name, email address, and usage data when you interact with our services.
                            </p>
                        </section>

                        <section>
                            <div className="flex items-center gap-2 mb-4">
                                <Eye className="w-6 h-6 text-primary" />
                                <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
                            </div>
                            <p>
                                Your information helps us to provide, improve, and personalize our services, as well as to communicate with you about updates and offers.
                            </p>
                        </section>

                        <section>
                            <div className="flex items-center gap-2 mb-4">
                                <Users className="w-6 h-6 text-primary" />
                                <h2 className="text-2xl font-semibold">Sharing Your Information</h2>
                            </div>
                            <p>
                                We may share your information with third-party service providers who assist us in operating our website, conducting our business, or servicing you.
                            </p>
                        </section>

                        <section>
                            <div className="flex items-center gap-2 mb-4">
                                <Bell className="w-6 h-6 text-primary" />
                                <h2 className="text-2xl font-semibold">Your Rights</h2>
                            </div>
                            <p>
                                You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data.
                            </p>
                        </section>
                    </div>

                    <section className="mt-8">
                        <div className="flex items-center gap-2 mb-4">
                            <Mail className="w-6 h-6 text-primary" />
                            <h2 className="text-2xl font-semibold">Contact Us</h2>
                        </div>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <p className="font-semibold">{privacyData.contactInfo}</p>
                    </section>
                </CardContent>
            </Card>
            <div className="mt-8 text-center">
                <Link href="/tos">
                    <Button variant="outline" size="lg">View Terms and Conditions</Button>
                </Link>
            </div>
        </div>
    )
}
