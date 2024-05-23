

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center space-y-3 my-12">
            <p className="text-[#D99904] text-lg font-medium">{heading}</p>
            <h2 className="text-3xl font-bold uppercase border-y-2 py-2 w-3/12 mx-auto">{subHeading}</h2>
        </div>
    );
};

export default SectionTitle;