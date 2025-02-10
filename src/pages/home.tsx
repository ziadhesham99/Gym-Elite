export default function Home() {
    return (
        <div>
            <div className="relative bg-black">
                <img
                    src={`https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                    className="w-full h-auto opacity-40"
                    alt="Background"
                />
            </div>
            <div className="bg-stone-50 h-96">ziad is great</div>
            <div className="bg-red-500 h-96">ziad is great</div>
            <div className="bg-red-500 h-96">ziad is great</div>
        </div>
    );
}
