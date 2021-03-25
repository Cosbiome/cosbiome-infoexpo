import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();

  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-md-12">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cosbiome-bcdf4.appspot.com/o/pablo%20(1).jpg?alt=media&token=425ce3c5-2799-4dd5-beb9-51ab83f20605"
                  alt="..."
                  width="100%"
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">INFROMACION SOBRE APRATOLOGIA</h5>
                </div>
              </div>
              <div
                style={{
                  marginTop: "auto",
                  marginBottom: "5px",
                  paddingRight: "15px",
                }}
                className="col-md-2"
              >
                <button
                  onClick={() => history.push("/registro/MAQUINAS")}
                  className="btn"
                >
                  DESCUBRIR MAS
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="card mb-3">
            <div className="row g-0">
              <div
                style={{
                  marginTop: "auto",
                  marginBottom: "5px",
                  paddingLeft: "15px",
                }}
                className="col-md-2"
              >
                <button
                  onClick={() => history.push("/registro/PRODUCTO")}
                  className="btn"
                >
                  DESCUBRIR MAS
                </button>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">
                    INFROMACION SOBRE LINEA COSBIOME
                  </h5>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cosbiome-bcdf4.appspot.com/o/cosbiome%20slider%2FPABLO-WEB-02.jpg?alt=media&token=b215da8a-517b-4bd2-85cc-776e6d377528"
                  alt="..."
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cosbiome-bcdf4.appspot.com/o/cosbiome%20slider%2Fpablo-10.jpg?alt=media&token=c16014d8-2d63-4daf-bec8-061cfef98e08"
                  alt="..."
                  width="100%"
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">
                    INFROMACION SOBRE CARRERAS COSBIOME
                  </h5>
                </div>
              </div>
              <div
                style={{
                  marginTop: "auto",
                  marginBottom: "5px",
                  paddingRight: "15px",
                }}
                className="col-md-2"
              >
                <button
                  onClick={() => history.push("/registro/COSMETOLOGIA")}
                  className="btn"
                >
                  DESCUBRIR MAS
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="card mb-3">
            <div className="row g-0">
              <div
                style={{
                  marginTop: "auto",
                  marginBottom: "5px",
                  paddingLeft: "15px",
                }}
                className="col-md-2"
              >
                <button
                  onClick={() => history.push("/registro/CURSO")}
                  className="btn"
                >
                  DESCUBRIR MAS
                </button>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">
                    INFROMACION SOBRE CURSOS COSBIOME
                  </h5>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cosbiome-bcdf4.appspot.com/o/cosbiome%20slider%2Fpablo-12.jpg?alt=media&token=6ac0c482-745c-4c9d-9baf-13edd9bb0e23"
                  alt="..."
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
