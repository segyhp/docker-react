import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';
import toJson from 'enzyme-to-json';



it('expect to render CounterButton Component', () => {
    const mockColor = 'red';
    expect(toJson(shallow(<CounterButton color={mockColor} />))).toMatchSnapshot();
});

it('correctly incrementes the counter', () => {
    const mockColor = 'red';    
    const wrapper =(shallow(<CounterButton color={mockColor} />));

    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 2 }); 
    expect(wrapper.props().color).toEqual('red'); 
});
