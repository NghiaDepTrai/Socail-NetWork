import React from "react";
import Register from "../auth/Register";
import LoginComponent from "../auth/Login";
import Alert from "../layout/Alert";
import Dashboard from "../dashboard/Dashboard";
import CreateProfile from "../profile-form/CreateProfile";
import EditProfile from "../profile-form/EditProfile";
import AddExperience from "../profile-form/AddExperience";
import AddEducation from "../profile-form/AddEducation";
import Profiles from "../profiles/Profiles";
import Profile from "../profile/Profile";
import Posts from "../posts/Posts";
import Post from "../post/Post";
import NotFound from "../layout/NotFound";
import PrivateRoute from "../routing/PrivateRoute";
import { Route, Switch } from "react-router-dom";

export const Routes = () => {
  return (
    <>
      <section className='container'>
        <Alert />
        <Switch>
          <Route path='/register' component={Register} />
          <Route path='/login' component={LoginComponent} />
          <Route path='/profiles' component={Profiles}  />
          <Route path='/profile/:id' component={Profile}  />
          <PrivateRoute path='/dashboard' component={Dashboard}  />
          <PrivateRoute path='/posts' component={Posts}  />
          <PrivateRoute path='/postsById/:id' component={Post}  />
          <PrivateRoute
            path='/create-profile'
            component={CreateProfile}
            
          />
          <PrivateRoute path='/edit-profile' component={EditProfile}  />
          <PrivateRoute
            path='/add-experience'
            component={AddExperience}
            
          />
          <PrivateRoute path='/add-education' component={AddEducation}  />
          <Route component={NotFound} />
        </Switch>
      </section>
    </>
  );
};

export default Routes;
