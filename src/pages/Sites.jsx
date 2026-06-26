import { useEffect, useState } from "react";
import api from "../api/axios";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Sites() {
    const [sites, setSites] = useState([]);
    const [loading, setLoading] = useState(true);

    const [form, setForm] = useState({
        siteName: "",
        location: "",
        state: "",
        latitude: "",
        longitude: "",
        siteType: ""
    });

    useEffect(() => {
        fetchSites();
    }, []);

    const fetchSites = async () => {
        try {
            const res = await api.get("/sites");

            setSites(res.data.sites || []);
        } catch (err) {
            console.error("Failed to load sites", err);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const createSite = async (e) => {
        e.preventDefault();

        try {
            await api.post("/sites", form);

            setForm({
                siteName: "",
                location: "",
                state: "",
                latitude: "",
                longitude: "",
                siteType: ""
            });

            fetchSites();

            alert("Site created successfully");
        } catch (err) {
            console.error(err);
            alert("Unable to create site");
        }
    };

    return (
        <DashboardLayout>

            <div className="container-fluid">

                <h2 className="mb-4">
                    Site Management
                </h2>

                <div className="card mb-4">

                    <div className="card-header">
                        Register New Site
                    </div>

                    <div className="card-body">

                        <form onSubmit={createSite}>

                            <div className="row">

                                <div className="col-md-6 mb-3">

                                    <label>Site Name</label>

                                    <input
                                        className="form-control"
                                        name="siteName"
                                        value={form.siteName}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="col-md-6 mb-3">

                                    <label>Location</label>

                                    <input
                                        className="form-control"
                                        name="location"
                                        value={form.location}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="col-md-4 mb-3">

                                    <label>State</label>

                                    <input
                                        className="form-control"
                                        name="state"
                                        value={form.state}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="col-md-4 mb-3">

                                    <label>Latitude</label>

                                    <input
                                        className="form-control"
                                        name="latitude"
                                        value={form.latitude}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="col-md-4 mb-3">

                                    <label>Longitude</label>

                                    <input
                                        className="form-control"
                                        name="longitude"
                                        value={form.longitude}
                                        onChange={handleChange}
                                    />

                                </div>
                                <div className="col-md-4 mb-3">

                                    <label>Capacity (kW)</label>

                                    <input
                                        className="form-control"
                                        name="siteType"
                                        value={form.siteType}
                                        onChange={handleChange}
                                    />

                                </div>

                            </div>

                            <button
                                className="btn btn-success"
                                type="submit"
                            >
                                Register Site
                            </button>

                        </form>

                    </div>

                </div>

                <div className="card">

                    <div className="card-header">
                        Registered Sites
                    </div>

                    <div className="card-body">

                        {loading ? (

                            <p>Loading...</p>

                        ) : (

                            <table className="table table-bordered table-hover">

                                <thead className="table-dark">

                                    <tr>
                                        <th>#</th>
                                        <th>Site Name</th>
                                        <th>Location</th>
                                        <th>State</th>
                                        <th>Latitude</th>
                                        <th>Longitude</th>
                                        <th>siteType</th>
                                        <th>Created</th>
                                        
                                    </tr>

                                </thead>

                                <tbody>

                                    {sites.length === 0 ? (

                                        <tr>
                                            <td colSpan="7" className="text-center">
                                                No sites available.
                                            </td>
                                        </tr>

                                    ) : (

                                        sites.map((site, index) => (

                                            <tr key={site._id}>

                                                <td>{index + 1}</td>

                                                <td>{site.siteName}</td>

                                                <td>{site.location}</td>

                                                <td>{site.state}</td>

                                                <td>{site.latitude}</td>

                                                <td>{site.longitude}</td>

                                                <td>{site.siteType}</td>

                                                <td>
                                                    {new Date(site.createdAt).toLocaleDateString()}
                                                </td>

                                            </tr>

                                        ))

                                    )}

                                </tbody>

                            </table>

                        )}

                    </div>

                </div>

            </div>

        </DashboardLayout>
    );
}