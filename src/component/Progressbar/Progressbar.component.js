/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import ProgressbarStep from './Progressbar.step.component';
import ProgressbarBar from './Progressbar.bar.component';

import './Progressbar.style';


/* ---- Prop Types -------*/
export const stepsType = PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,

});
export const stepsArrType = PropTypes.arrayOf(
    stepsType
);


/**
 * Progressbar
 * @class Progressbar
 * @namespace Component/Progressbar/Component
 */
export class Progressbar extends PureComponent {
    static propTypes = {
        setLoading: stepsArrType.isRequired,
        activeStepIndex: PropTypes.bool,
    }



    renderBar(isActive){
        return (<ProgressbarBar isActive={isActive} />)
    }


    render() {

        var _self           = this;
        let steps           = this.props.steps;
        let activeStep      = this.props.activeStepIndex ?? 0; 
        let isProgressDone  = (steps.length  <= activeStep) ? true : false;

        

        return (
            // <ContentWrapper mix={{ block: 'Progressbar' }} label={__('Progressbar ...')}>
                <section className='step-wrapper'>

                <ProgressbarBar barWidth={"100%"} isFill={true} />

                    {steps.length > 0 && steps.map((stepObj,i)=>{
                        let isActive    = i === activeStep;
                        let isDone      = i < activeStep;
                        let isBarActive = (i+1) === activeStep;
                        let isBarFill   = (i+1) < activeStep;

                        let bar = (i !== (steps.length - 1)) ? <ProgressbarBar barWidth={"80vh"} isActive={isBarActive} isFill={isBarFill} />  : null
                        return ([<ProgressbarStep
                                    {...stepObj}
                                    isActive={isActive}
                                    isDone={isDone}
                                    itemIndex={i}
                                    key={stepObj.id ? stepObj.id : stepObj.label}
                                />,
                                bar
                            ])
                    })}

                <ProgressbarBar barWidth={"100%"} isFill={isProgressDone} />

                </section>
            // </ContentWrapper>
        );
    }
}

export default Progressbar;

