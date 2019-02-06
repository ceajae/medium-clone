import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
        follow,
        toggleOpen
       } from '../../redux/actions';
import { object } from 'prop-types';


class FollowButton extends Component {
    constructor(props) {
        super (props);

        this.followUser = this.followUser.bind(this);
    }

    followUser () {
        if (Object.keys(this.props._user).length > 0) {
            if (this.props._user._id !== this.props.to_follow){
                if (this.props.user.indexOf(this.props.to_follow) === -1){
                    this.props.follow(this.props._user._id, this.props.to_follow)
                }
            }
        } else {
            this.props.toggleOpen();
        }
    }

    render() {
        let following = this.props.user;
        const f = following.indexOf(this.props.to_follow);

        return (
            <div>
                <div>
                    <div onClick= {this.followUser} data-reactroot="">
                        <a className= {f === -1 ? 
                                            "button green-border-button follow-button" : 
                                            "button green-inner-button follow-button"} 
                                        href="javascript:void(0);">

                                {f === -1 ? 'Follow':'Following'}
                        </a>

                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        _user: state.authUser.user,
    }
}
export default connect(mapStateToProps, { 
                                            follow,
                                            toggleOpen}
                                        )(FollowButton);