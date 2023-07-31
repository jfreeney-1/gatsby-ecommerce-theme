import React, {useEffect} from "react";

const HubSpotForm = React.forwardRef((props) => {
    const {portalIdInput,
        formIdInput
        
      } = props;
    useEffect(() => {
        const script = document.createElement('script');
        script.src='https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            // @TS-ignore
            if (window.hbspt) {
                // @TS-ignore
                window.hbspt.forms.create({
                    portalId: {portalIdInput},
                    formId: {formIdInput},
                    target: '#hubspotForm'
                })
            }
        });
    }, []);

    return (
        <div>
            <div id="hubspotForm"></div>
        </div>
    );

});

export default HubSpotForm;