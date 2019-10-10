import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

const Spinner = (props) => {

return (/* <div className ="ui active dimmer ">
            <div class="ui big text loader">
                Loading...
            </div>
    </div>

    */
    <div>
        <Segment>
          <Dimmer active>
              <Loader big text>
                    {props.message || 'Loading ....' }
              </Loader>
           </Dimmer>

            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>
    </div> );
};

export default Spinner;