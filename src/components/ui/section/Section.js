const Section = props => {
    return (
        <section id={props.id ? props.id : ''} className={props.className} >
            {props.children}
        </section>
    );
};

export default Section;