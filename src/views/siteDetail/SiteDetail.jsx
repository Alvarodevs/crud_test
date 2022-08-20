import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SiteForm from "../../components/siteForm";
import { getSingleSite } from "../../services/sites";

const SiteDetail = () => {
    const [siteToProps, setSiteToProps] = useState({})
    const { id } = useParams();

    useEffect(() => {
        getSingleSite(id)
        .then((singleSite) => {
            return (
                setSiteToProps(singleSite)
            )
        })
    }, [id])
    
    return (
        <div>
            <SiteForm singleSite={siteToProps}></SiteForm>
        </div>
    );
};

export default SiteDetail;
