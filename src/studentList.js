import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";

function Student() {
    const navigate = useNavigate();

    let myStyle = {
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column"
    }
    return (
        <>
            <button className="btn btn-primary" onClick={() => navigate(-1)}><BiArrowBack className="me-1" />Previous Page</button>
            <div className='container my-3' style={myStyle}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>SL no.</th>
                            <th>Name</th>
                            <th>Class</th>
                            <th>Cource</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Biswarup Kundu</td>
                            <td>BCA(2)</td>
                            <td>BCA</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Anurag Biswas</td>
                            <td>BCA(2)</td>
                            <td>BCA</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={2}>Reshab Naskar</td>
                            <td>JavaScript</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    );
}
export default Student;