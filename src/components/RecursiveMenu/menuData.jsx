const menuData = [
    {
        label: "Home",
        link: "/home",
    },
    {
        label: "About",
        link: "/about",
        children: [
            {
                label: "Team",
                link: "/about/team",
                children: [
                    {
                        label: "Management",
                        link: "/about/team/management",
                        children: [
                            {
                                label: "CEO",
                                link: "/about/team/management/ceo",
                            },
                            {
                                label: "CTO",
                                link: "/about/team/management/cto",
                            },
                        ],
                    },
                    {
                        label: "Staff",
                        link: "/about/team/staff",
                    },
                ],
            },
            {
                label: "Company",
                link: "/about/company",
            },
        ],
    },
    {
        label: "Services",
        link: "/services",
        children: [
            {
                label: "Consulting",
                link: "/services/consulting",
            },
            {
                label: "Development",
                link: "/services/development",
                children: [
                    {
                        label: "Web Development",
                        link: "/services/development/web",
                    },
                    {
                        label: "Mobile Development",
                        link: "/services/development/mobile",
                    },
                ],
            },
        ],
    },
];


export { menuData };
