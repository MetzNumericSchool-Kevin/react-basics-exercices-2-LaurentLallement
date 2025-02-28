interface BienvenueAventurierProps {
    id: string;
    children?: React.ReactNode;
}
export function BienvenueAventurier({id, children} : BienvenueAventurierProps) {
    return (
        // <>
            <p id={id}>
                {children}
            </p>
        // </>
    );
}