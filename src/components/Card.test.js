import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';
import toJson, {createSerializer} from 'enzyme-to-json';


it('expect to render Card Component', () => {
    //what shallow do is create simple component
    //what mount do is create full component and need dom API to work or browser /headless browser
    //what render do is between shallow and mount, just for render but not fully functional
    // expect(shallow(<Card />).length).toEqual(1);
    //create snapshot
    expect(toJson(shallow(<Card />))).toMatchSnapshot();
});
