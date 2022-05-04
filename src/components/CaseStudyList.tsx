import CaseStudy from "./CaseStudy";

const CaseStudyList = () => {
    return (
        <div className="bg-secondary dark:bg-primary flex flex-col items-center">
            <div className="hidden bg-mockup-img-gthr-1"></div>
            <div className="hidden bg-mockup-img-gthr-2"></div>
            <div className="hidden bg-mockup-img-mpp-1"></div>
            <div className="hidden bg-mockup-img-mpp-2"></div>
            <div className="hidden bg-mockup-img-dhs-1"></div>
            <div className="hidden bg-mockup-img-dhs-2"></div>
            <div className="hidden bg-mockup-img-ch-1"></div>
            <div className="hidden bg-mockup-img-ch-2"></div>
            <div className="hidden bg-mockup-img-h2r-1"></div>
            <div className="hidden bg-mockup-img-h2r-2"></div>
            <CaseStudy title="Camp Horizon" 
                       skills="Research, Prototyping, Testing"
                       description="The Camp Horizon website isn't easy to use and Camp Horizon isn't getting enough volunteers and donations. We redesigned the homepage and reorganized the information to make it easier to find information on donation tiers and Camp Horizon's mission."
                       mockup="ch"
                       desktop={false} />
            <CaseStudy title="Hope2Restoration" 
                       skills="Research, Prototyping, Testing"
                       description="The Hope2Restoration website isn't easy to use nor is it easy to access crucial information to volunteer and donate, and Hope2Restoration isn't getting enough volunteers and donations. We added a Donate button on the homepage, an easier and simpler volunteer path, and redesigned the information to make it easier to find a way to donate and learn about Hope2Restoration's mission to help homeless people."
                       mockup="h2r"
                       desktop={true} />
            <CaseStudy title="gthr" 
                       skills="Research, Prototyping, Testing"
                       description="Travelers who prefer to travel in groups need a way to gather and go there efficiently. Travelers are often concerned with the collective costs, agreement on the destination and trip, and scheduling the trip. The solution is a social media app to allow quick communication, agreement, and purchase of trip expenses for group trips."
                       mockup="gthr"
                       desktop={false} />
            <CaseStudy title="MyPetPal" 
                       skills="Research, Prototyping, Testing"
                       description="Pet owners have issues digitally sharing, tracking, and assigning, the daily task and responsibilities of pet ownership with other caretakers. We created a calendar app that lets pet owners assign and schedule tasks to trusted caretakers."
                       mockup="mpp"
                       desktop={false} />
            <CaseStudy title="DHS" 
                       skills="Research, Prototyping, Testing"
                       description="The DHS website is unintuitive to navigate, and information on the website is difficult to find. The solution devised was to redesign the website and reorganize the information."
                       mockup="dhs"
                       desktop={false} />
        </div>
    );
};

export default CaseStudyList;