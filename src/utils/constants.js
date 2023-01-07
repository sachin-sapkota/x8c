import ProjectImage1 from '../assets/image/project1.png';
import TeamMember from '../assets/image/team.png';
import CareerImage1 from '../assets/image/career1.png';
import CareerImage2 from '../assets/image/career2.png';
import CareerImage3 from '../assets/image/career3.png';
import CareerImage4 from '../assets/image/career4.png';
import TestimonialImage from '../assets/image/testimonial.png';

export const navigation = [
    {
        label: 'About',
        to: '/about',
    },
    {
        label: 'Our Work',
        to: '/sprint',
    },
    {
        label: 'Services',
        children: [
            {
                label: 'Devise',
                submenu: [
                    { label: 'Strategy', to: '/service' },
                    { label: 'Brand Architecture', to: '/service' },
                    { label: 'Messaging', to: '/service' },
                    { label: 'Proposition', to: '/service' },
                ],
            },
            {
                label: 'Create',
                submenu: [
                    { label: 'Branding', to: '/service' },
                    { label: 'UX/UI', to: '/service' },
                    { label: 'Animation', to: '/service' },
                    { label: 'Graphic Design', to: '/service' },
                    { label: 'Content Strategy', to: '/service' },
                    { label: 'Website Design', to: '/service' },
                ],
            },
            {
                label: 'Grow',
                submenu: [
                    { label: 'KOL Management', to: '/service' },
                    { label: 'Community Moderation', to: '/service' },
                    { label: 'PR', to: '/service' },
                    { label: 'Social Media', to: '/service' },
                    { label: 'PPC', to: '/service' },
                ],
            },
        ],
    },
    {
        label: 'Careers',
        to: '/career',
    },
    {
        label: 'Contact',
        to: '/contact',
    },
];

export const footerNavigation = [
    [
        {
            label: 'Home',
            to: '/',
        },
        {
            label: 'About',
            to: '/about',
        },
        {
            label: 'Strategy',
            to: '/',
        },
        {
            label: 'Brand Architecture',
            to: '/',
        },
        {
            label: 'Messaging',
            to: '/',
        },
        {
            label: 'Proposition',
            to: '/',
        },
        {
            label: 'Branding',
            to: '/',
        },
        {
            label: 'UX/UI',
            to: '/',
        },
        {
            label: 'Animation',
            to: '/',
        },
        {
            label: 'Graphic Design',
            to: '/',
        },
        {
            label: 'Content Strategy',
            to: '/',
        },
    ],
    [
        {
            label: 'Careers',
            to: '/career',
        },
        {
            label: 'Contact',
            to: '/contact',
        },
        {
            label: 'Website Design',
            to: '/',
        },
        {
            label: 'KOL Management',
            to: '/',
        },
        {
            label: 'Community',
            to: '/',
        },
        {
            label: 'Moderation',
            to: '/',
        },
        {
            label: 'Guerrilla Marketing',
            to: '/',
        },
        {
            label: 'PR',
            to: '/',
        },
        {
            label: 'Social Media',
            to: '/',
        },
        {
            label: 'PPC',
            to: '/',
        },
    ],
];

export const projects = [
    {
        name: 'HAPEBEAST',
        image: ProjectImage1,
        background: '#000000',
    },
    {
        name: 'PROPIXEL1',
        image: ProjectImage1,
        background: '#5b3062',
    },
    {
        name: 'PROPIXEL2',
        image: ProjectImage1,
        background: '#1f5e3b',
    },
    {
        name: 'PROPIXEL3',
        image: ProjectImage1,
        background: '#1a005f',
    },
];

export const services = [
    {
        label: 'Strategy',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna,',
    },
    {
        label: 'Brand Architecture',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna,',
    },
    {
        label: 'Messaging',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna,',
    },
    {
        label: 'Proposition',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna,',
    },
    {
        label: 'Branding',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna,',
    },
    {
        label: 'UX/UI',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna,',
    },
    {
        label: 'Animation',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna,',
    },
    {
        label: 'Graphic Design',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna,',
    },
    {
        label: 'Content Strategy',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna,',
    },
    {
        label: 'Website Design',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna,',
    },
    {
        label: 'KOL Management',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna,',
    },
    {
        label: 'Community Moderation',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna,',
    },
    {
        label: 'Guerilla Marketing',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna,',
    },
    {
        label: 'PR',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna,',
    },
    {
        label: 'Social Media',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna,',
    },
    {
        label: 'PPC',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna,',
    },
];

export const numbersInfo = [
    {
        prefix: '',
        suffix: '',
        number: 150,
        text: 'Clients Served',
    },
    {
        prefix: '',
        suffix: '+',
        number: 100,
        text: 'Team Size',
    },
    {
        prefix: '',
        suffix: '+',
        number: 400,
        text: 'Publication Partners',
    },
    {
        prefix: '$',
        suffix: 'M+',
        number: 600,
        text: 'Raised',
    },
    {
        prefix: '',
        suffix: 'M+',
        number: 300,
        text: 'Influencer Potential Outreach',
    },
];

export const teamInfo = [
    {
        name: 'Damir Horvat, CEO',
        email: 'damir@x8c.io',
        image: TeamMember,
        color: '#FF006C',
    },
    {
        name: 'Name Here, Role',
        email: 'name@x8c.io',
        image: TeamMember,
        color: '#004EFF',
    },
    {
        name: 'Name Here, Role',
        email: 'name@x8c.io',
        image: TeamMember,
        color: '#00FFCE',
    },
    {
        name: 'Name Here, Role',
        email: 'name@x8c.io',
        image: TeamMember,
        color: '#FF7600',
    },
    {
        name: 'Name Here, Role',
        email: 'name@x8c.io',
        image: TeamMember,
        color: '#8000FF',
    },
    {
        name: 'Name Here, Role',
        email: 'name@x8c.io',
        image: TeamMember,
        color: '#00FFCE',
    },
    {
        name: 'Name Here, Role',
        email: 'name@x8c.io',
        image: TeamMember,
        color: '#EBFF00',
    },
    {
        name: 'Name Here, Role',
        email: 'name@x8c.io',
        image: TeamMember,
        color: '#FF006C',
    },
];

export const selectOptions = ['Start a Project', 'Join the Team', 'Make an Enquiry'];

export const stepInfo = [
    {
        label: 'STEP1',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna,',
    },
    {
        label: 'STEP2',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna, Lorem ipsum dolor sit amet, ',
    },
    {
        label: 'STEP3',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna,',
    },
    {
        label: 'STEP4',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna,',
    },
    {
        label: 'STEP5',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna,',
    },
    {
        label: 'STEP6',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna,',
    },
    {
        label: 'STEP7',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna,',
    },
];

export const careerParallax = [CareerImage1, CareerImage2, CareerImage3, CareerImage4];

export const careerCategories = ['View All', 'Management', 'Operations', 'Marketing', 'Creative'];

export const careerPositions = [
    {
        title: 'Marketing Manager',
        category: 'Marketing',
        location: 'Remote',
        type: 'Full Time',
        salary: '£30k/year',
    },
    {
        title: 'Graphic Designer',
        category: 'Creative',
        location: 'Remote',
        type: 'Part Time',
        salary: '£22k/year',
    },
    {
        title: 'Operations Manager',
        category: 'Management',
        location: 'Australia',
        type: 'Full Time',
        salary: '£40k/year',
    },
    {
        title: 'Marketing Manager1',
        category: 'Marketing',
        location: 'Remote',
        type: 'Part Time',
        salary: '£18k/year',
    },
    {
        title: 'Community Manager',
        category: 'Operations',
        location: 'UAE',
        type: 'Full Time',
        salary: '£40k/year',
    },
    {
        title: 'Business Development',
        category: 'Management',
        location: 'United Kingdom',
        type: 'Full Time',
        salary: '£30k/year',
    },
];

export const testimonials = [
    {
        image: TestimonialImage,
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        position: 'Joe Bloggs - Creative Lead',
    },
    {
        image: CareerImage1,
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        position: 'XYZ - Operation Lead',
    },
    {
        image: CareerImage2,
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        position: 'XXX - Product Manager',
    },
];

export const brandSprintInfo = [
    {
        title: 'Duration',
        text: '15 Days',
    },
    {
        title: 'Investment',
        text: '$55,000',
    },
    {
        title: 'Creative Team',
        text: '6 People',
    },
];

export const productSprintInfo = [
    {
        title: 'Duration',
        text: '20 Days',
    },
    {
        title: 'Investment',
        text: '$45,000',
    },
    {
        title: 'Creative Team',
        text: '4 People',
    },
];
