import React from "react";
import { connect } from "react-redux";
import { signupUser } from "../../actions/auth";
import AnimationRevealPage from "components/Treact/helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/Treact/components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "components/Treact/images/signup-illustration.svg";
// import logo from "images/logo.svg";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";

const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;
const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
`;

class Signup extends React.Component {
  state = {
    first_name: '',
    middle_initial: '',
    last_name: '',
    email: '',
    password: '',
    errors: {status: {message: ''}}
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { first_name, middle_initial, last_name, email, password } = this.state;
    this.props
      .dispatchSignupUser({ first_name, middle_initial, last_name, email, password })
      .then(() => this.props.history.push("/"))
      .catch((errors) => this.setState({ errors }));
  };

  render() {
    // const logoLinkUrl = "#"
    const headingText = "Sign Up For Financier"
    const submitButtonText = "Sign Up"
    const SubmitButtonIcon = SignUpIcon
    const signInUrl = "/login"
    return (
      <AnimationRevealPage>
        <Container>
          <Content>
            <MainContainer>
              {/* <LogoLink href={logoLinkUrl}>
                <LogoImage src={logo} />
              </LogoLink> */}
              <MainContent>
                <Heading>{headingText}</Heading>
                <FormContainer>
                  <Form onSubmit={this.handleSubmit}>
                    <Input type='text' placeholder='First Name' name='first_name' onChange={this.handleChange} value={this.state.first_name} />
                    <Input type='text' placeholder='M.' name='middle_initial' onChange={this.handleChange} value={this.state.middle_initial} />
                    <Input type='text' placeholder='Last Name' name='last_name' onChange={this.handleChange} value={this.state.last_name} />
                    <Input type='email' placeholder='Email' name='email' onChange={this.handleChange} value={this.state.email} />
                    <Input type='password' name='password' placeholder='Password' onChange={this.handleChange} value={this.state.password}/>
                    <SubmitButton type='submit'>
                      <SubmitButtonIcon className='icon' />
                      <span className='text'>{submitButtonText}</span>
                    </SubmitButton>
                    <p tw="mt-8 text-sm text-gray-600 text-center">
                      {this.state.error}<br/>
                      Already have an account?{' '}
                      <a href={signInUrl} tw="border-b border-gray-500 border-dotted">
                        Log In
                      </a>
                    </p>
                  </Form>
                </FormContainer>
              </MainContent>
            </MainContainer>
            <IllustrationContainer>
              <IllustrationImage imageSrc={illustration} />
            </IllustrationContainer>
          </Content>
        </Container>
      </AnimationRevealPage>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSignupUser: (credentials) => dispatch(signupUser(credentials))
  };
};

export default connect(null, mapDispatchToProps)(Signup);
