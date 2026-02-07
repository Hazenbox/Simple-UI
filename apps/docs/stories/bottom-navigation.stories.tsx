import type { Meta, StoryObj } from "@storybook/react";
import { BottomNavigation, BottomNavigationItem } from "@acme/ui/bottom-navigation";
import { Home, Search, Heart, User } from "lucide-react";
import { useState } from "react";

const meta = {
    title: "UI/Mobile/Bottom Navigation",
    component: BottomNavigation,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof BottomNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const [active, setActive] = useState("home");

        return (
            <div className="relative h-[600px] bg-muted/50">
                <div className="flex h-full items-center justify-center">
                    <p className="text-muted-foreground">Content area</p>
                </div>
                <BottomNavigation className="flex">
                    <BottomNavigationItem
                        icon={<Home />}
                        label="Home"
                        active={active === "home"}
                        onClick={() => setActive("home")}
                    />
                    <BottomNavigationItem
                        icon={<Search />}
                        label="Search"
                        active={active === "search"}
                        onClick={() => setActive("search")}
                    />
                    <BottomNavigationItem
                        icon={<Heart />}
                        label="Favorites"
                        active={active === "favorites"}
                        onClick={() => setActive("favorites")}
                    />
                    <BottomNavigationItem
                        icon={<User />}
                        label="Profile"
                        active={active === "profile"}
                        onClick={() => setActive("profile")}
                    />
                </BottomNavigation>
            </div>
        );
    },
};

export const ThreeItems: Story = {
    render: () => {
        const [active, setActive] = useState("home");

        return (
            <div className="relative h-[600px] bg-muted/50">
                <div className="flex h-full items-center justify-center">
                    <p className="text-muted-foreground">Content area</p>
                </div>
                <BottomNavigation className="flex">
                    <BottomNavigationItem
                        icon={<Home />}
                        label="Home"
                        active={active === "home"}
                        onClick={() => setActive("home")}
                    />
                    <BottomNavigationItem
                        icon={<Search />}
                        label="Explore"
                        active={active === "explore"}
                        onClick={() => setActive("explore")}
                    />
                    <BottomNavigationItem
                        icon={<User />}
                        label="Profile"
                        active={active === "profile"}
                        onClick={() => setActive("profile")}
                    />
                </BottomNavigation>
            </div>
        );
    },
};
