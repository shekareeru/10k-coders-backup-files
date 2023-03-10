import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUserAction, addUsersAsyncAction, deleteUserAction, deleteUsersAsyncAction, getUsersAsyncAction, updateUserAction, updateUsersAsyncAction } from '../store/actions/usersAction'

class Userclasscomp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
              fname: "",
              lname: "",
              email: "",
            },
            isEdit: false,
          };
        }
        handleChange = (e) => {
          let newUser = { ...this.state.user };
          newUser[e.target.name] = e.target.value;
          this.setState({ user: newUser });
        };
        handleSubmit = () => {
          // this.props.addUser(this.state.user);
          this.props.addUserAsync(this.state.user)
          this.clearForm();
        };
        clearForm = () => {
          this.setState({
            user: {
              fname: "",
              lname: "",
              email: "",
            },
          });
        };
        handleDelete = (user) => {
          // this.props.deleteUser(user);
          this.props.deleteUserAsync(user)
        };
        handleEdit = (user) => {
          this.setState({ user,isEdit:true });
        };
        handleUpdate=()=>{
          this.props.updateUserAsync(this.state.user)
          // this.props.updateUser(this.state.user);
          this.clearForm()
          this.setState({isEdit:false });
        }
        componentDidMount(){
          this.props.getUsers()
        }
        render() {
          const { fname, lname, email } = this.state.user;
          const { users } = this.props.allUsers;
          return (
            <div>
              <form>
                <label htmlFor="fname">First Name : </label>
                <input
                  type="text"
                  name="fname"
                  value={fname}
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />{" "}
                <br />
                <label htmlFor="fname">Last Name : </label>
                <input
                  type="text"
                  name="lname"
                  value={lname}
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />{" "}
                <br />
                <label htmlFor="fname">Email : </label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                  disabled={this.state.isEdit}
                />{" "}
                <br />
                {this.state.isEdit ? (
                  <button type="button" onClick={this.handleUpdate}>
                    Update User
                  </button>
                ) : (
                  <button type="button" onClick={this.handleSubmit}>
                    Add User
                  </button>
                )}
              </form>
              <table border={1}>
                <thead>
                  <tr>
                    <th>First Name </th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, i) => (
                    <tr key={i}>
                      <td>{user.fname}</td>
                      <td>{user.lname}</td>
                      <td>{user.email}</td>
                      <td>
                        <button
                          onClick={() => {
                            this.handleEdit(user);
                          }}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            this.handleDelete(user);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
      }
      
      function mapStateToProps(state) {
        console.log(state);
        return {
          allUsers: state.users,
        };
      }
      
      function mapDispatchToProps(dispatch) {
        return {
          addUser: (user) => dispatch(addUserAction(user)),
          deleteUser: (user) => dispatch(deleteUserAction(user)),
          updateUser:(user)=>dispatch(updateUserAction(user)),
          getUsers:()=>dispatch(getUsersAsyncAction()),
    addUserAsync:(user)=>dispatch(addUsersAsyncAction(user)),
    deleteUserAsync:(user)=>dispatch(deleteUsersAsyncAction(user)),
    updateUserAsync:(user)=>dispatch(updateUsersAsyncAction(user))
         
        };
      }
      export default connect(mapStateToProps, mapDispatchToProps)(Userclasscomp);