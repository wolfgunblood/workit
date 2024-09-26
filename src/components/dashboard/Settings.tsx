
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Settings({
  user,
}: {
  user: { name: string; email: string; plan: string; avatar: string };
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>Manage your account information</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <Button variant="outline">Change Avatar</Button>
          </div>
          <div className="space-y-2">
            <Label htmlFor="settings-name">Name</Label>
            <Input id="settings-name" defaultValue={user.name} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="settings-email">Email</Label>
            <Input id="settings-email" type="email" defaultValue={user.email} />
          </div>
          <div className="space-y-2">
            <Label>Current Plan</Label>
            <div className="flex items-center justify-between rounded-md bg-gray-100 p-3">
              <span className="font-medium">{user.plan}</span>
              <Button variant="outline" size="sm">
                Upgrade
              </Button>
            </div>
          </div>
          <Button className="w-full">Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  );
}
