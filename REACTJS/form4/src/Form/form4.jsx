import { Component } from "react";

export default class Registration extends Component {
    constructor() {
      super();
      this.state = {
        college: {
          university: "",
          institute: "",
          Branch: "",
          Degree: "",
          status: "",
          Average: "",
          Experience: "",
          website: "",
        },
        AllColleges: [
          {
            university: "JNTUH",
            institute: "GNIT",
            Branch: "Civil",
            Degree: "B-Tech",
            status: "completed",
            Average: "55",
            Experience: "4",
            website: "mynet.com",
          },
        ],
        editIndex:null,
      };
    }
    handleChange = (e) => {
      // console.log(e.target.value)
      var newCollege = { ...this.state.college };
      newCollege[e.target.name] = e.target.value;
      this.setState({ college: newCollege });
    };
    addCollege = () => {
      var latestCollege = [...this.state.AllColleges];
      latestCollege.push(this.state.college);
      // console.log(this.state.college);
      this.setState({ AllColleges: latestCollege });
      this.clearForm();
    };
    deleteUser = (mycol) => {
      var latestCollege = this.state.AllColleges.filter(
        (clg) => clg.Average !== mycol.Average
      );
      this.setState({ AllColleges: latestCollege });
    };
  
    clearForm = () => {
      var newForm = {
        university: "",
        institute: "",
        Branch: "",
        Degree: "",
        status: "",
        Average: "",
        Experience: "",
        website: "",
      };
      this.setState({ college: newForm });
    };
    editUser=(mycol,i)=>{
     this.setState({college:mycol,editIndex:i})
  
    }
    updateCollege=()=>{
      var latestCollege=[...this.state.AllColleges]
      latestCollege[this.state.editIndex]=this.state.college
      this.setState({AllColleges:latestCollege,editIndex:null})
      this.clearForm();
  
    }
    render() {
      const {
        university,
        institute,
        Branch,
        Degree,
        status,
        Average,
        Experience,
        website,
      } = this.state.college;
      return (
        <div>
            
          <form >
            
            <h2>Registration Form</h2>
            <label htmlFor="">University:</label>
            <input
              type="text"
              name="university"
              value={university}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
            <br />
            <br />
            <label htmlFor="">Institute</label>
            <input
              type="text"
              name="institute"
              value={institute}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
            <br />
            <br />
            <label htmlFor="">Branch</label>
            <select
              name="Branch"
              value={Branch}
              onChange={(e) => {
                this.handleChange(e);
              }}
            >
              <option>select branch</option>
              <option value={"Mechanical"}>Mechanical</option>
              <option value={"Electrical"}>Electrical</option>
              <option value={"Civil"}>Civil</option>
            </select>
            <br />
            <br />
            <label htmlFor="">Degree</label>
            <select
              name="Degree"
              value={Degree}
              onChange={(e) => {
                this.handleChange(e);
              }}
            >
              <option>select branch</option>
              <option value={"B-Tech"}>B-Tech</option>
              <option value={"Diploma"}>Diploma</option>
              <option value={"Degree"}>Degree</option>
            </select>
            <br />
            <br />
            <label htmlFor="">Status :</label>
            <input
              type="radio"
              name="status"
              value={"pursuing"}
              onChange={(e) => {
                this.handleChange(e);
              }}
              checked={status === "pursuing"}
            />
            Pursuing
            <input
              type="radio"
              name="statusc"
              value={"Completed"}
              onChange={(e) => {
                this.handleChange(e);
              }}
              checked={status === "Completed"}
            />
            Completed
            <br />
            <br />
            <label htmlFor="">Average</label>
            <input
              type="number"
              name="Average"
              value={Average}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
            <br />
            <br />
            <label htmlFor="">Experience</label>
            <input
              type="number"
              name="Experience"
              value={Experience}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
            <br />
            <br />
            <label htmlFor="">website</label>
            <input
              type="text"
              name="website"
              value={website}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
            <br />
            <br />
            {this.state.editIndex!==null?<button
              type="button"
              className="btn btn-secondary"
              onClick={this.updateCollege}
            >
             update
            </button>: <button
              type="button"
              className="btn btn-primary"
              onClick={this.addCollege}
            >
              Done
            </button> }
            {/* <button
              type="button"
              className="btn btn-primary"
              onClick={this.addCollege}
            >
              Done
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.updateCollege}
            >
             update
            </button> */}
          </form>
          <hr />
          <table className="table">
            <thead>
              <tr>
                <th>Uiversity:</th>
                <th>Insttute:</th>
                <th>Branch</th>
                <th>Degree</th>
                <th>Status</th>
                <th>Average</th>
                <th>Experience</th>
                <th>website</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.AllColleges.map((mycol, i) => (
                <tr key={i}>
                  <td>{mycol.university}</td>
                  <td>{mycol.institute}</td>
                  <td>{mycol.Branch}</td>
                  <td>{mycol.Degree}</td>
                  <td>{mycol.status}</td>
                  <td>{mycol.Average}</td>
                  <td>{mycol.Experience}</td>
                  <td>{mycol.website}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => {
                        this.editUser(mycol, i);
                      }}
                    >
                      editUser
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        this.deleteUser(mycol);
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