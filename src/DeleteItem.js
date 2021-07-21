import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import './DeleteItem.scss';
import DeleteService from './services/DeleteService';
import { withAlert } from 'react-alert';
class DeleteItem extends Component {
    deleteService = new DeleteService();
    constructor(props) {
        super(props);
        this.state = {
            isDeleteOpen: true,
        };
    }
    componentDidMount = async () => {
        await this.setState({ isDeleteOpen: true });
    }
    handleOpen = async () => {
        await this.setState({ isDeleteOpen: true });
    };
    handleClose = async () => {
        await this.setState({ isDeleteOpen: false });
        this.props.handleDeleteClose(false);
    };
    handleDelete = async () => {
        this.deleteService.deleteItem(this.props.data.api, this.props.data.id).then(async (data) => {
            if (data.affectedRows != undefined) {
                if (data.affectedRows > 0) {
                    this.props.alert.success("Deleted Successfully.");
                    await this.setState({ isDeleteOpen: false });
                    this.props.handleDeleteClose(true);
                }
            }
            else {
                this.props.alert.error(data.message);
            }
        });
    };
    render() {
        return (
            <div>
                <Modal
                    className="DeleteItemPage"
                    onHide={this.handleClose}
                    show={this.state.isDeleteOpen}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {this.props.data.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure you want to delete <span className="subtitle"> {this.props.data.subtitle} </span> ?
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-secondary" onClick={this.handleClose}>Cancel</button>
                        <button className="btn btn-primary" onClick={this.handleDelete}>Delete</button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
export default withAlert()(DeleteItem);
// const useStyles = (theme) => ({
//     modal: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     paper: {
//         backgroundColor: theme.palette.background.paper,
//         border: '1px solid #000',
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//     },
// });