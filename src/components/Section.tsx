const Section = ({ id, children }) => {
    return (
        <section id={id} className="my-5">
            {children}
        </section>
    );
};

export default Section;
