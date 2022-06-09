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

import './Progressbar.style';

/**
 * Progressbar Step
 * @class ProgressbarStep
 * @namespace Component/Progressbar/Component
 */
export class ProgressbarStep extends PureComponent {
    static propTypes = {
        isActive: PropTypes.bool,
        isDone: PropTypes.bool,
        itemIndex: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
    }

    


    render() {

        let isActive    = this.props.isActive;
        let isDone      = this.props.isDone;
        let itemIndex   = this.props.itemIndex;
        let label       = this.props.label;

        let className = 'step';
        className    += (isDone) ? " done ":"";
        className    += (isActive) ? " active ":"";

        return (
            <div className={className} title={label}>
                <div className='step-info'>
                    <div className='number-box'>{isDone ? "✓" : itemIndex +1}</div>
                    <span className='step-label'>{label}</span>
                </div>
            </div>
        );
    }
}

export default ProgressbarStep;
