import React from 'react';
import { MapPin, Clock, DollarSign, Bookmark } from 'lucide-react';

const FeaturedJobs = () => {
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $150k',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      description: 'Join our team to build cutting-edge web applications using React and modern technologies.',
      tags: ['React', 'TypeScript', 'Node.js'],
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'InnovateLab',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$100k - $130k',
      logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      description: 'Lead product strategy and development for our flagship SaaS platform.',
      tags: ['Strategy', 'Analytics', 'Agile'],
      posted: '1 day ago'
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      company: 'DesignStudio',
      location: 'Remote',
      type: 'Contract',
      salary: '$80k - $100k',
      logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      description: 'Create beautiful and intuitive user experiences for mobile and web applications.',
      tags: ['Figma', 'Sketch', 'Prototyping'],
      posted: '3 days ago'
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'DataTech Solutions',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$110k - $140k',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      description: 'Analyze complex datasets and build machine learning models to drive business insights.',
      tags: ['Python', 'ML', 'SQL'],
      posted: '1 week ago'
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      company: 'CloudFirst',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '$130k - $160k',
      logo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      description: 'Build and maintain scalable cloud infrastructure and deployment pipelines.',
      tags: ['AWS', 'Docker', 'Kubernetes'],
      posted: '4 days ago'
    },
    {
      id: 6,
      title: 'Marketing Manager',
      company: 'GrowthCo',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      salary: '$90k - $120k',
      logo: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      description: 'Drive marketing campaigns and growth strategies for our expanding startup.',
      tags: ['Digital Marketing', 'SEO', 'Analytics'],
      posted: '5 days ago'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Jobs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover hand-picked opportunities from top companies looking for talented professionals like you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{job.title}</h3>
                    <p className="text-gray-600 text-sm">{job.company}</p>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors">
                  <Bookmark className="h-5 w-5" />
                </button>
              </div>

              {/* Job Details */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="h-4 w-4 mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Clock className="h-4 w-4 mr-2" />
                  {job.type} • {job.posted}
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <DollarSign className="h-4 w-4 mr-2" />
                  {job.salary}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {job.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Apply Button */}
              <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* View All Jobs Button */}
        <div className="text-center mt-12">
          <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
            View All Jobs
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;