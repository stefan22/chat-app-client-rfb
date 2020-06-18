import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme/customTheme';
import { createShallow } from '@material-ui/core/test-utils';
import Footer from './Footer';


const setup = component => 
	<ThemeProvider theme={theme}>`${component}`</ThemeProvider>



describe('Footer comp', () => {

  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });

  it('should render without errors', () => {
		let wrapper = shallow(setup(<Footer />));
		wrapper.find("[data-test='footerWrapper']");
		expect(wrapper.length).toBe(1);
  });

	it('should render appName within footer', () => {
    const wrapper = shallow(setup(<Footer />));
		wrapper.find("[data-test='appName']");
		expect(wrapper.length).toBe(1);
  });


});
