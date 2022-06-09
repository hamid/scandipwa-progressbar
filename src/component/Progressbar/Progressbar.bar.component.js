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
export class ProgressbarBar extends PureComponent {
    static propTypes = {
        isActive: PropTypes.bool,
        barWidth: PropTypes.string.isRequired,
        isFill: PropTypes.bool,
    }

    


    render() {
        let isActive = this.props.isActive;
        let barWidth = this.props.barWidth;
        let isFill   = this.props.isFill;
        
        return (
            <div className={isFill ?'bar filled':'bar'} style={{ width: barWidth }}>
                {isActive  && <div className='active-bar'></div>}
            </div>
        );
    }
}

export default ProgressbarBar;
