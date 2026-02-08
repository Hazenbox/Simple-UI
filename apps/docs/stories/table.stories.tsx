import type { Meta, StoryObj } from "@storybook/react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@acme/ui/table";
import { Badge } from "@acme/ui/badge";
import { Chip } from "@acme/ui/chip";
import { Avatar, AvatarFallback, AvatarImage } from "@acme/ui/avatar";
import { Skeleton } from "@acme/ui/skeleton";
import { Button } from "@acme/ui/button";
import { Checkbox } from "@acme/ui/checkbox";
import { Input } from "@acme/ui/input";
import { useState } from "react";
import {
    ArrowUpDown,
    ArrowUp,
    ArrowDown,
    Check,
    X,
    AlertCircle,
    MoreHorizontal,
    ChevronLeft,
    ChevronRight,
    Download,
    Search,
    SlidersHorizontal,
} from "lucide-react";

const meta = {
    title: "UI/Display/Table",
    component: Table,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const invoices = [
    { invoice: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
    { invoice: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
    { invoice: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
    { invoice: "INV004", status: "Paid", method: "Credit Card", amount: "$450.00" },
    { invoice: "INV005", status: "Paid", method: "PayPal", amount: "$550.00" },
];

/* ------------------------------------------------------------------ */
/*  Default                                                            */
/* ------------------------------------------------------------------ */

export const Default: Story = {
    render: () => (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((inv) => (
                    <TableRow key={inv.invoice}>
                        <TableCell className="font-medium">{inv.invoice}</TableCell>
                        <TableCell>{inv.status}</TableCell>
                        <TableCell>{inv.method}</TableCell>
                        <TableCell className="text-right">{inv.amount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    ),
};

/* ------------------------------------------------------------------ */
/*  Rounded Border                                                     */
/* ------------------------------------------------------------------ */

export const RoundedBorder: Story = {
    render: () => (
        <div className="w-full max-w-2xl overflow-hidden rounded-xl border">
            <Table>
                <TableHeader>
                    <TableRow className="border-b">
                        <TableHead>Date</TableHead>
                        <TableHead>Source</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {[
                        { date: "01 Aug", source: "Stripe", type: "Product", desc: "Course Sale - UI Basics", amount: "$79", status: "Paid" },
                        { date: "30 Jul", source: "Upwork", type: "Service", desc: "Design Sprint Session", amount: "$450", status: "Paid" },
                        { date: "28 Jul", source: "Gumroad", type: "Product", desc: "E-book: Web Design Kit", amount: "$25", status: "Pending" },
                        { date: "27 Jul", source: "Bank Transfer", type: "Expense", desc: "Annual Hosting Fee", amount: "-$120", status: "Completed" },
                        { date: "26 Jul", source: "Affiliate", type: "Commission", desc: "Figma Plugin Promo", amount: "$145", status: "Paid" },
                    ].map((r, i) => (
                        <TableRow key={i}>
                            <TableCell>{r.date}</TableCell>
                            <TableCell>{r.source}</TableCell>
                            <TableCell>{r.type}</TableCell>
                            <TableCell>{r.desc}</TableCell>
                            <TableCell className="text-right font-medium">{r.amount}</TableCell>
                            <TableCell>
                                <Badge variant={r.status === "Paid" ? "success" : r.status === "Pending" ? "warning" : "soft"}>
                                    {r.status}
                                </Badge>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    ),
};

/* ------------------------------------------------------------------ */
/*  Striped Rows                                                       */
/* ------------------------------------------------------------------ */

export const StripedRows: Story = {
    render: () => (
        <div className="w-full max-w-2xl overflow-hidden rounded-xl border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Department</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {[
                        { name: "John Doe", email: "john@example.com", role: "Admin", dept: "Engineering" },
                        { name: "Jane Smith", email: "jane@example.com", role: "Manager", dept: "Design" },
                        { name: "Bob Johnson", email: "bob@example.com", role: "Developer", dept: "Engineering" },
                        { name: "Alice Brown", email: "alice@example.com", role: "Designer", dept: "Design" },
                        { name: "Charlie Wilson", email: "charlie@example.com", role: "PM", dept: "Product" },
                        { name: "Diana Lee", email: "diana@example.com", role: "Developer", dept: "Engineering" },
                    ].map((r, i) => (
                        <TableRow key={i} className={i % 2 === 1 ? "bg-muted/30" : ""}>
                            <TableCell className="font-medium">{r.name}</TableCell>
                            <TableCell>{r.email}</TableCell>
                            <TableCell>{r.role}</TableCell>
                            <TableCell>{r.dept}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    ),
};

/* ------------------------------------------------------------------ */
/*  Horizontal Scroll                                                  */
/* ------------------------------------------------------------------ */

export const HorizontalScroll: Story = {
    render: () => (
        <div className="w-full max-w-xl">
            <div className="overflow-x-auto rounded-xl border">
                <Table className="min-w-[900px]">
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>City</TableHead>
                            <TableHead>Banner</TableHead>
                            <TableHead>Area</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>State</TableHead>
                            <TableHead className="text-right">Basket</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {[
                            { id: "1001", name: "Lyon Store", email: "lyon@ex.com", city: "Lyon", banner: "SUPER", area: "CENTRE-EST", type: "Franchised", state: "OPEN", basket: "31.53" },
                            { id: "1002", name: "Paris Store", email: "paris@ex.com", city: "Paris", banner: "SUPER", area: "REGION PARISIENNE", type: "Franchised", state: "OPEN", basket: "27.32" },
                            { id: "1003", name: "La Gorgue", email: "lagorgue@ex.com", city: "La Gorgue", banner: "HYPER", area: "NORD", type: "Franchised", state: "CLOSED", basket: "0.00" },
                            { id: "1004", name: "Beziers", email: "beziers@ex.com", city: "Beziers", banner: "SUPER", area: "SUD EST", type: "Franchised", state: "OPEN", basket: "31.53" },
                        ].map((r) => (
                            <TableRow key={r.id}>
                                <TableCell>{r.id}</TableCell>
                                <TableCell className="font-medium">{r.name}</TableCell>
                                <TableCell>{r.email}</TableCell>
                                <TableCell>{r.city}</TableCell>
                                <TableCell>{r.banner}</TableCell>
                                <TableCell><Chip variant="outline" className="text-avatar-blue">{r.area}</Chip></TableCell>
                                <TableCell>{r.type}</TableCell>
                                <TableCell>
                                    <span className="flex items-center gap-1.5">
                                        <span className={`h-1.5 w-1.5 rounded-full ${r.state === "OPEN" ? "bg-success" : "bg-destructive"}`} />
                                        {r.state}
                                    </span>
                                </TableCell>
                                <TableCell className="text-right">{r.basket}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    ),
};

/* ------------------------------------------------------------------ */
/*  Frozen First Column                                                */
/* ------------------------------------------------------------------ */

export const FrozenFirstColumn: Story = {
    render: () => (
        <div className="w-full max-w-lg">
            <div className="overflow-x-auto rounded-xl border">
                <Table className="min-w-[800px]">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="sticky left-0 z-10 bg-muted/80 backdrop-blur-sm shadow-[2px_0_4px_-2px_rgba(0,0,0,0.06)]">Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Department</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Salary</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {[
                            { name: "John Doe", email: "john@example.com", role: "Engineer", dept: "Engineering", loc: "San Francisco", status: "Active", salary: "$120K" },
                            { name: "Jane Smith", email: "jane@example.com", role: "Designer", dept: "Design", loc: "New York", status: "Active", salary: "$110K" },
                            { name: "Bob Johnson", email: "bob@example.com", role: "PM", dept: "Product", loc: "London", status: "Away", salary: "$130K" },
                        ].map((r, i) => (
                            <TableRow key={i}>
                                <TableCell className="sticky left-0 z-10 bg-background font-medium shadow-[2px_0_4px_-2px_rgba(0,0,0,0.06)]">{r.name}</TableCell>
                                <TableCell>{r.email}</TableCell>
                                <TableCell>{r.role}</TableCell>
                                <TableCell>{r.dept}</TableCell>
                                <TableCell>{r.loc}</TableCell>
                                <TableCell>
                                    <Badge variant={r.status === "Active" ? "success" : "warning"}>{r.status}</Badge>
                                </TableCell>
                                <TableCell className="text-right">{r.salary}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    ),
};

/* ------------------------------------------------------------------ */
/*  Vertical Scroll + Sticky Header                                    */
/* ------------------------------------------------------------------ */

export const VerticalScroll: Story = {
    render: () => (
        <div className="w-full max-w-2xl overflow-hidden rounded-xl border">
            <div className="max-h-64 overflow-y-auto">
                <Table>
                    <TableHeader className="sticky top-0 z-10 bg-muted/90 backdrop-blur-sm">
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Details</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Array.from({ length: 20 }, (_, i) => ({
                            date: `2024-0${(i % 9) + 1}-${String(28 - i).padStart(2, "0")}`,
                            details: ["Stripe sale", "Weekly purchase", "Withdrawal", "Manual buy", "Revenue conversion"][i % 5],
                            amount: `$${(Math.random() * 1000 + 50).toFixed(2)}`,
                            status: ["Completed", "Pending", "Completed", "Completed", "Cancelled"][i % 5],
                        })).map((r, i) => (
                            <TableRow key={i}>
                                <TableCell>{r.date}</TableCell>
                                <TableCell>{r.details}</TableCell>
                                <TableCell className="font-medium">{r.amount}</TableCell>
                                <TableCell>
                                    <span className="flex items-center gap-1">
                                        {r.status === "Completed" && <Check className="h-3 w-3 text-success" />}
                                        {r.status === "Pending" && <AlertCircle className="h-3 w-3 text-warning" />}
                                        {r.status === "Cancelled" && <X className="h-3 w-3 text-destructive" />}
                                        <span className={
                                            r.status === "Completed" ? "text-success" :
                                                r.status === "Pending" ? "text-warning" :
                                                    "text-destructive"
                                        }>{r.status}</span>
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    ),
};

/* ------------------------------------------------------------------ */
/*  Loading State (Skeleton)                                           */
/* ------------------------------------------------------------------ */

export const Loading: Story = {
    render: () => (
        <div className="w-full max-w-2xl overflow-hidden rounded-xl border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <TableRow key={i}>
                            <TableCell><Skeleton className="h-3 w-24" /></TableCell>
                            <TableCell><Skeleton className="h-3 w-36" /></TableCell>
                            <TableCell><Skeleton className="h-3 w-16" /></TableCell>
                            <TableCell className="text-right"><Skeleton className="ml-auto h-3 w-16" /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    ),
};

/* ------------------------------------------------------------------ */
/*  Pagination - Numbered Pages                                        */
/* ------------------------------------------------------------------ */

export const PaginationNumbered: Story = {
    render: () => {
        const [page, setPage] = useState(1);
        const totalPages = 9;
        const allData = Array.from({ length: 90 }, (_, i) => ({
            id: `INV${String(i + 1).padStart(4, "0")}`,
            customer: `Customer ${i + 1}`,
            amount: `$${(Math.random() * 500 + 50).toFixed(2)}`,
            status: ["Paid", "Pending", "Unpaid"][i % 3],
        }));
        const pageData = allData.slice((page - 1) * 10, page * 10);

        return (
            <div className="w-full max-w-2xl space-y-3">
                <div className="overflow-hidden rounded-xl border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Invoice</TableHead>
                                <TableHead>Customer</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {pageData.map((r) => (
                                <TableRow key={r.id}>
                                    <TableCell className="font-medium">{r.id}</TableCell>
                                    <TableCell>{r.customer}</TableCell>
                                    <TableCell>
                                        <Badge variant={r.status === "Paid" ? "success" : r.status === "Pending" ? "warning" : "destructive"}>
                                            {r.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">{r.amount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{(page - 1) * 10 + 1}-{Math.min(page * 10, 90)} of 90</span>
                    <div className="flex items-center gap-1">
                        <Button variant="outline" size="sm" className="h-7 w-7 p-0" onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1}>
                            <ChevronLeft className="h-3 w-3" />
                        </Button>
                        {[1, 2, 3].map((p) => (
                            <Button key={p} variant={p === page ? "default" : "outline"} size="sm" className="h-7 w-7 p-0 text-xs" onClick={() => setPage(p)}>
                                {p}
                            </Button>
                        ))}
                        <span className="px-1">...</span>
                        <Button variant="outline" size="sm" className="h-7 w-7 p-0 text-xs" onClick={() => setPage(totalPages)}>
                            {totalPages}
                        </Button>
                        <Button variant="outline" size="sm" className="h-7 w-7 p-0" onClick={() => setPage(Math.min(totalPages, page + 1))} disabled={page === totalPages}>
                            <ChevronRight className="h-3 w-3" />
                        </Button>
                    </div>
                </div>
            </div>
        );
    },
};

/* ------------------------------------------------------------------ */
/*  Pagination - Load More                                             */
/* ------------------------------------------------------------------ */

export const PaginationLoadMore: Story = {
    render: () => {
        const [count, setCount] = useState(5);
        const allData = Array.from({ length: 20 }, (_, i) => ({
            id: `INV${String(i + 1).padStart(4, "0")}`,
            email: `user${i + 1}@example.com`,
            subject: ["Service payment", "Product purchase", "Product payment", "Subscription", "Consulting fee"][i % 5],
            amount: `$${(Math.random() * 500 + 10).toFixed(2)}`,
            status: ["Paid", "Past due", "Draft", "Paid", "Unpaid"][i % 5],
        }));

        return (
            <div className="w-full max-w-2xl overflow-hidden rounded-xl border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Invoice</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Subject</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {allData.slice(0, count).map((r) => (
                            <TableRow key={r.id}>
                                <TableCell className="font-medium">{r.id}</TableCell>
                                <TableCell>{r.email}</TableCell>
                                <TableCell>{r.subject}</TableCell>
                                <TableCell>
                                    <Badge variant={
                                        r.status === "Paid" ? "success" :
                                            r.status === "Past due" ? "destructive" :
                                                r.status === "Draft" ? "secondary" : "warning"
                                    }>{r.status}</Badge>
                                </TableCell>
                                <TableCell className="text-right">{r.amount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                {count < allData.length && (
                    <div className="flex justify-center border-t py-2">
                        <Button variant="ghost" size="sm" className="text-xs" onClick={() => setCount((c) => Math.min(c + 5, allData.length))}>
                            Load More <ChevronRight className="ml-1 h-3 w-3 rotate-90" />
                        </Button>
                    </div>
                )}
            </div>
        );
    },
};

/* ------------------------------------------------------------------ */
/*  Checkbox Selection                                                 */
/* ------------------------------------------------------------------ */

export const CheckboxSelection: Story = {
    render: () => {
        const data = [
            { id: "1", name: "Hyperrise", amount: "$3,852.32", currency: "USD", status: "Sent" },
            { id: "2", name: "Hyperrise", amount: "£1,917.30", currency: "GBP", status: "Paid" },
            { id: "3", name: "Hyperrise", amount: "$3,852.32", currency: "USD", status: "Unpaid" },
            { id: "4", name: "Hyperrise", amount: "£1,917.30", currency: "GBP", status: "Paid" },
        ];
        const [selected, setSelected] = useState<string[]>([]);

        const toggleAll = () => {
            setSelected(selected.length === data.length ? [] : data.map((d) => d.id));
        };

        const toggle = (id: string) => {
            setSelected((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);
        };

        return (
            <div className="w-full max-w-2xl overflow-hidden rounded-xl border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-10 cursor-pointer select-none" onClick={toggleAll}>
                                <Checkbox size="sm" className="pointer-events-none" checked={selected.length === data.length} onCheckedChange={toggleAll} aria-label="Select all" />
                            </TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Currency</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((r) => (
                            <TableRow key={r.id} data-state={selected.includes(r.id) ? "selected" : undefined}>
                                <TableCell className="cursor-pointer select-none" onClick={() => toggle(r.id)}>
                                    <Checkbox size="sm" className="pointer-events-none" checked={selected.includes(r.id)} aria-label={`Select ${r.name}`} />
                                </TableCell>
                                <TableCell className="font-medium">{r.name}</TableCell>
                                <TableCell>{r.amount}</TableCell>
                                <TableCell>{r.currency}</TableCell>
                                <TableCell>
                                    <Badge variant={r.status === "Paid" ? "success" : r.status === "Unpaid" ? "destructive" : "info"}>
                                        {r.status}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
    },
};

/* ------------------------------------------------------------------ */
/*  Rich Content Cells                                                 */
/* ------------------------------------------------------------------ */

export const RichContent: Story = {
    render: () => (
        <div className="w-full max-w-3xl overflow-hidden rounded-xl border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Type</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Payment Method</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Activity</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {[
                        { type: "Sent", typeColor: "text-avatar-orange", amount: "- 500.00 IDR", method: "Credit Card", methodSub: "**** 6969", status: "Success", statusIcon: "check", activity: "Sending money to **Raihan Fikri**" },
                        { type: "Sent", typeColor: "text-avatar-orange", amount: "- 200.000 IDR", method: "Wire Transfer", methodSub: "**** 9830", status: "Success", statusIcon: "check", activity: "Sending money to **Bani Zuhilmin**" },
                        { type: "Received", typeColor: "text-avatar-green", amount: "+ 1.500 USD", method: "Bank Transfer", methodSub: "**** 6663", status: "Success", statusIcon: "check", activity: "Received money from **Andrew**" },
                        { type: "Received", typeColor: "text-avatar-green", amount: "+ 2.500 USD", method: "PayPal", methodSub: "@claristaj", status: "Incomplete", statusIcon: "alert", activity: "Payment for invoice" },
                        { type: "Converted", typeColor: "text-avatar-blue", amount: "400.000 IDR", method: "Debit Card", methodSub: "**** 2833", status: "Failed", statusIcon: "x", activity: "Convert money from **USD** to **IDR**" },
                    ].map((r, i) => (
                        <TableRow key={i}>
                            <TableCell>
                                <span className="flex items-center gap-2">
                                    <span className={`flex h-6 w-6 items-center justify-center rounded-full ${r.typeColor} bg-current/10`}>
                                        {r.type === "Sent" && <ArrowUp className={`h-3 w-3 ${r.typeColor}`} />}
                                        {r.type === "Received" && <ArrowDown className={`h-3 w-3 ${r.typeColor}`} />}
                                        {r.type === "Converted" && <ArrowUpDown className={`h-3 w-3 ${r.typeColor}`} />}
                                    </span>
                                    {r.type}
                                </span>
                            </TableCell>
                            <TableCell className="font-medium">{r.amount}</TableCell>
                            <TableCell>
                                <div>
                                    <div>{r.method}</div>
                                    <div className="text-xs text-muted-foreground">{r.methodSub}</div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <span className="flex items-center gap-1">
                                    {r.statusIcon === "check" && <Check className="h-3 w-3 text-success" />}
                                    {r.statusIcon === "alert" && <AlertCircle className="h-3 w-3 text-warning" />}
                                    {r.statusIcon === "x" && <X className="h-3 w-3 text-destructive" />}
                                    <span className={
                                        r.status === "Success" ? "text-success" :
                                            r.status === "Incomplete" ? "text-warning" : "text-destructive"
                                    }>{r.status}</span>
                                </span>
                            </TableCell>
                            <TableCell>
                                <span dangerouslySetInnerHTML={{ __html: r.activity.replace(/\*\*(.*?)\*\*/g, '<span class="font-medium">$1</span>') }} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    ),
};

/* ------------------------------------------------------------------ */
/*  Status Dots                                                        */
/* ------------------------------------------------------------------ */

export const StatusDots: Story = {
    render: () => (
        <div className="w-full max-w-2xl overflow-hidden rounded-xl border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Store</TableHead>
                        <TableHead>City</TableHead>
                        <TableHead>Area</TableHead>
                        <TableHead>State</TableHead>
                        <TableHead className="text-right">Basket</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {[
                        { store: "Lyon Store", city: "Lyon", area: "CENTRE-EST", areaColor: "text-avatar-teal", state: "OPEN", basket: "31.53" },
                        { store: "Paris Store", city: "Paris", area: "REGION PARIS", areaColor: "text-avatar-amber", state: "OPEN", basket: "27.32" },
                        { store: "La Gorgue", city: "La Gorgue", area: "NORD", areaColor: "text-avatar-blue", state: "CLOSED", basket: "0.00" },
                        { store: "Beziers", city: "Beziers", area: "SUD EST", areaColor: "text-avatar-orange", state: "OPEN", basket: "31.53" },
                    ].map((r, i) => (
                        <TableRow key={i}>
                            <TableCell className="font-medium">{r.store}</TableCell>
                            <TableCell>{r.city}</TableCell>
                            <TableCell>
                                <Chip variant="outline" className={r.areaColor}>{r.area}</Chip>
                            </TableCell>
                            <TableCell>
                                <span className="flex items-center gap-1.5">
                                    <span className={`h-1.5 w-1.5 rounded-full ${r.state === "OPEN" ? "bg-success" : "bg-destructive"}`} />
                                    {r.state}
                                </span>
                            </TableCell>
                            <TableCell className="text-right">{r.basket}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    ),
};

/* ------------------------------------------------------------------ */
/*  Row Actions                                                        */
/* ------------------------------------------------------------------ */

export const RowActions: Story = {
    render: () => (
        <div className="w-full max-w-2xl overflow-hidden rounded-xl border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Invoice</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        <TableHead className="w-10" />
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((inv) => (
                        <TableRow key={inv.invoice}>
                            <TableCell className="font-medium">{inv.invoice}</TableCell>
                            <TableCell>Customer {inv.invoice.slice(-1)}</TableCell>
                            <TableCell>
                                <Badge variant={inv.status === "Paid" ? "success" : inv.status === "Pending" ? "warning" : "destructive"}>
                                    {inv.status}
                                </Badge>
                            </TableCell>
                            <TableCell className="text-right">{inv.amount}</TableCell>
                            <TableCell>
                                <Button variant="ghost" size="sm" className="h-7 w-7 p-0" aria-label="Row actions">
                                    <MoreHorizontal className="h-3.5 w-3.5" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    ),
};

/* ------------------------------------------------------------------ */
/*  With Avatar + Name                                                 */
/* ------------------------------------------------------------------ */

export const WithAvatars: Story = {
    render: () => (
        <div className="w-full max-w-2xl overflow-hidden rounded-xl border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {[
                        { name: "Olivia Martin", email: "olivia@example.com", status: "Paid", amount: "$1,999.00", avatar: "https://avatar.vercel.sh/olivia" },
                        { name: "Jackson Lee", email: "jackson@example.com", status: "Pending", amount: "$39.00", avatar: "https://avatar.vercel.sh/jackson" },
                        { name: "Isabella Nguyen", email: "isabella@example.com", status: "Paid", amount: "$299.00", avatar: "https://avatar.vercel.sh/isabella" },
                        { name: "William Kim", email: "william@example.com", status: "Unpaid", amount: "$99.00", avatar: "https://avatar.vercel.sh/william" },
                    ].map((r, i) => (
                        <TableRow key={i}>
                            <TableCell>
                                <span className="flex items-center gap-2">
                                    <Avatar size="sm">
                                        <AvatarImage src={r.avatar} />
                                        <AvatarFallback>{r.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                                    </Avatar>
                                    <span className="font-medium">{r.name}</span>
                                </span>
                            </TableCell>
                            <TableCell>{r.email}</TableCell>
                            <TableCell>
                                <Badge variant={r.status === "Paid" ? "success" : r.status === "Pending" ? "warning" : "destructive"}>
                                    {r.status}
                                </Badge>
                            </TableCell>
                            <TableCell className="text-right font-medium">{r.amount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    ),
};

/* ------------------------------------------------------------------ */
/*  Filter Toolbar + Search                                            */
/* ------------------------------------------------------------------ */

export const FilterToolbar: Story = {
    render: () => {
        const [search, setSearch] = useState("");
        const data = [
            { id: "INV001", customer: "Olivia Martin", status: "Paid", amount: "$250.00", date: "2024-01-15" },
            { id: "INV002", customer: "Jackson Lee", status: "Pending", amount: "$150.00", date: "2024-01-14" },
            { id: "INV003", customer: "Isabella Nguyen", status: "Unpaid", amount: "$350.00", date: "2024-01-13" },
            { id: "INV004", customer: "William Kim", status: "Paid", amount: "$450.00", date: "2024-01-12" },
            { id: "INV005", customer: "Sofia Davis", status: "Paid", amount: "$550.00", date: "2024-01-11" },
        ];
        const filtered = data.filter((d) =>
            d.customer.toLowerCase().includes(search.toLowerCase()) ||
            d.id.toLowerCase().includes(search.toLowerCase())
        );

        return (
            <div className="w-full max-w-3xl space-y-3">
                <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <Search className="absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                placeholder="Search invoices..."
                                className="h-8 w-56 pl-8 text-xs"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <Chip variant="secondary" onDelete={() => {}}>Status <Badge variant="secondary" className="ml-1 px-1">3</Badge></Chip>
                        <Chip variant="secondary" onDelete={() => {}}>Date range</Chip>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Button variant="outline" size="sm" className="h-8 text-xs">
                            <SlidersHorizontal className="mr-1.5 h-3 w-3" /> Filters
                        </Button>
                        <Button variant="outline" size="sm" className="h-8 text-xs">
                            <Download className="mr-1.5 h-3 w-3" /> Export
                        </Button>
                    </div>
                </div>
                <div className="overflow-hidden rounded-xl border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Invoice</TableHead>
                                <TableHead>Customer</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filtered.length > 0 ? filtered.map((r) => (
                                <TableRow key={r.id}>
                                    <TableCell className="font-medium">{r.id}</TableCell>
                                    <TableCell>{r.customer}</TableCell>
                                    <TableCell>
                                        <Badge variant={r.status === "Paid" ? "success" : r.status === "Pending" ? "warning" : "destructive"}>
                                            {r.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{r.date}</TableCell>
                                    <TableCell className="text-right">{r.amount}</TableCell>
                                </TableRow>
                            )) : (
                                <TableRow>
                                    <TableCell colSpan={5} className="h-16 text-center text-muted-foreground">
                                        No results found.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        );
    },
};
