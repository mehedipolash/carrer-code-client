// import React from 'react';
// import { useLoaderData } from 'react-router';

// const JobDetails = () => {
//     const { title, company, description } = useLoaderData();
//     return (
//         <div>
//             <h2 className='text-6xl'>{title}</h2>
//             <p>Company: {company}</p>
//             <p>Description: {description}</p>
//             <button className='btn btn-primary'>Apply Now</button>
//         </div>
//     );
// };

// export default JobDetails;

import React from 'react';
import { useLoaderData } from 'react-router';
import { motion } from 'motion/react';
import {
    MapPin, Briefcase, Clock, DollarSign,
    Calendar, Mail, User, CheckCircle, Star
} from 'lucide-react';

const JobDetails = () => {
    const {
        title,
        company,
        company_logo,
        description,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        requirements,
        responsibilities,
        status,
        hr_name,
        hr_email,
    } = useLoaderData();

    return (
        <div className="min-h-screen bg-base-200 py-10 px-4">
            <div className="max-w-4xl mx-auto space-y-6">

                {/* ── Header Card ── */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="card bg-base-100 shadow-xl p-6"
                >
                    <div className="flex items-center gap-5">
                        {/* Company Logo */}
                        <img
                            src={company_logo}
                            alt={company}
                            className="w-20 h-20 rounded-xl object-contain border p-1"
                        />

                        {/* Title + Company + Status */}
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold">{title}</h1>
                            <p className="text-lg text-gray-500 mt-1">{company}</p>
                            <span className={`badge mt-2 ${status === 'active' ? 'badge-success' : 'badge-error'}`}>
                                {status}
                            </span>
                        </div>
                    </div>

                    {/* Quick Info Pills */}
                    <div className="flex flex-wrap gap-4 mt-6 text-sm text-gray-600">

                        <div className="flex items-center gap-1">
                            <MapPin size={16} className="text-primary" />
                            <span>{location}</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <Briefcase size={16} className="text-primary" />
                            <span>{jobType}</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <Star size={16} className="text-primary" />
                            <span>{category}</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <DollarSign size={16} className="text-primary" />
                            <span>
                                {salaryRange.min.toLocaleString()} – {salaryRange.max.toLocaleString()} {salaryRange.currency.toUpperCase()}
                            </span>
                        </div>

                        <div className="flex items-center gap-1">
                            <Calendar size={16} className="text-primary" />
                            <span>Deadline: {applicationDeadline}</span>
                        </div>

                    </div>
                </motion.div>

                {/* ── Description ── */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="card bg-base-100 shadow-xl p-6"
                >
                    <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <Clock size={20} className="text-primary" /> Job Description
                    </h2>
                    <p className="text-gray-600 leading-relaxed">{description}</p>
                </motion.div>

                {/* ── Requirements ── */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="card bg-base-100 shadow-xl p-6"
                >
                    <h2 className="text-xl font-semibold mb-3">Requirements</h2>
                    <div className="flex flex-wrap gap-2">
                        {requirements.map((req, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + index * 0.05 }}
                                className="badge badge-outline badge-primary px-3 py-3 text-sm"
                            >
                                {req}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* ── Responsibilities ── */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="card bg-base-100 shadow-xl p-6"
                >
                    <h2 className="text-xl font-semibold mb-3">Responsibilities</h2>
                    <ul className="space-y-2">
                        {responsibilities.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + index * 0.08 }}
                                className="flex items-start gap-2 text-gray-600"
                            >
                                <CheckCircle size={18} className="text-success mt-0.5 shrink-0" />
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* ── HR Contact + Apply Button ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="card bg-base-100 shadow-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                >
                    {/* HR Info */}
                    <div className="space-y-1 text-sm text-gray-600">
                        <p className="flex items-center gap-2">
                            <User size={16} className="text-primary" />
                            <span className="font-medium">HR Contact:</span> {hr_name}
                        </p>
                        <p className="flex items-center gap-2">
                            <Mail size={16} className="text-primary" />
                            <a href={`mailto:${hr_email}`} className="link link-primary">
                                {hr_email}
                            </a>
                        </p>
                    </div>

                    {/* Apply Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-primary px-8"
                    >
                        Apply Now
                    </motion.button>
                </motion.div>

            </div>
        </div>
    );
};

export default JobDetails;

