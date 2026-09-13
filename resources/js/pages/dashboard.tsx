import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';


export default function Dashboard() {
    return (
        <>
            <Head title="Home" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {/* childbox */} 
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">


                    {/* boxnumber1 */}
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full " />
                    </div>

                    {/* boxnumber2 */}
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full " />
                    </div>
                    {/* boxnumber3 */} 
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full  " />
                    </div>
                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full" />
                </div>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Home',
            href: dashboard(),
        },
    ],
};