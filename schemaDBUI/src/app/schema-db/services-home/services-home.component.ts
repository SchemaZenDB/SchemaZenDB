import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-services-home',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, NgbCarouselModule],
  templateUrl: './services-home.component.html',
  styleUrl: './services-home.component.scss',
})
export class ServicesHomeComponent {
  services = [
    {
      title: 'Database Support',
      description:
        '24/7 monitoring, proactive health checks, troubleshooting and optimization.',
      icon: 'bi-database',
    },
    {
      title: 'DBA Managed Services',
      description:
        'End-to-end database administration handled by certified experts.',
      icon: 'bi-gear',
    },
    {
      title: 'Cloud Database Management',
      description:
        'AWS, Azure, GCP database deployment, scaling, and optimization.',
      icon: 'bi-cloud',
    },
    {
      title: 'Database Migration',
      description:
        'Secure, zero-downtime migration across platforms and environments.',
      icon: 'bi-arrow-left-right',
    },
    {
      title: 'Performance Optimization',
      description:
        'Query tuning, indexing, and performance improvement strategies.',
      icon: 'bi-speedometer2',
    },
    {
      title: 'High Availability & DR',
      description:
        'Failover setup, replication, and disaster recovery planning.',
      icon: 'bi-shield-check',
    },
    {
      title: 'Data Engineering',
      description:
        'Data pipelines, ETL workflows, and real-time processing solutions.',
      icon: 'bi-diagram-3',
    },
    {
      title: 'Consulting',
      description:
        'Architecture design, database strategy, and scalability consulting.',
      icon: 'bi-lightbulb',
    },
  ];

  cards = [
    {
      title: 'DBA Managed Services',
      description:
        'Comprehensive database management and support services to ensure optimal performance, security, and reliability for your databases.',
      personName: 'Satya',
      personTitle: 'CEO, Tech Solutions Inc.',
    },
    {
      title: 'Remote DBA Support',
      description:
        'Expert remote database administration services to monitor, maintain, and optimize your databases from anywhere, ensuring high availability and performance.',
      personName: 'Priya',
      personTitle: 'CTO, Data Insights Ltd.',
    },
    {
      title: 'OnSite DBA Support',
      description:
        'Professional on-site database administration services to provide hands-on support, troubleshooting, and optimization for your databases.',
      personName: 'Ravi',
      personTitle: 'IT Manager, Global Enterprises',
    },
    {
      title: 'Database Development',
      description:
        'Custom database development services to design, build, and optimize databases tailored to your specific business needs and requirements.',
      personName: 'Anita',
      personTitle: 'Lead Developer, Innovatech Solutions',
    },
  ];
}
