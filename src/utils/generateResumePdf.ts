import { jsPDF } from 'jspdf';
import annaPhoto from '../assets/images/anna_about.jpeg';

export async function generateAndDownloadResume() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 14;

  // Background
  doc.setFillColor(255, 255, 255);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Top header left: Portrait photo
  try {
    const img = new Image();
    img.src = annaPhoto;
    await new Promise((resolve) => {
      if (img.complete) resolve(true);
      else {
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
      }
    });

    // Draw photo on left top
    doc.addImage(img, 'JPEG', margin, margin, 52, 68);
  } catch (e) {
    // fallback if image cannot load
    doc.setFillColor(240, 240, 245);
    doc.rect(margin, margin, 52, 68, 'F');
  }

  // Header Right: Name & Title (Exact from PDF)
  const rightColX = margin + 58;
  doc.setTextColor(24, 24, 27);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(24);
  doc.text('Anna Mergeryan', rightColX, margin + 10);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(80, 80, 90);
  doc.text('UX/UI Designer, Graphic Designer', rightColX, margin + 17);

  // Subtle separator under title
  doc.setDrawColor(220, 220, 225);
  doc.setLineWidth(0.3);
  doc.line(rightColX, margin + 22, pageWidth - margin, margin + 22);

  // Intro text (Exact from PDF)
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(60, 60, 70);
  const introText = "Graphic & Product Designer passionate about creating meaningful experiences through the combination of visual design, creative thinking, and user-centered problem-solving. I transform ideas and complex challenges into clear, engaging visual identities and intuitive digital products that connect with people and support business goals.";
  const splitIntro = doc.splitTextToSize(introText, pageWidth - margin - rightColX);
  doc.text(splitIntro, rightColX, margin + 28, { lineHeightFactor: 1.4 });

  // ---------------- LEFT COLUMN (Contact, Education, Skills) ----------------
  const leftColX = margin;
  const leftColWidth = 54;
  let leftY = margin + 76;

  // CONTACT (Exact from PDF)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(24, 24, 27);
  doc.text('Contact', leftColX, leftY);
  leftY += 6;

  const renderContactItem = (label: string, value: string) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(50, 50, 60);
    doc.text(label, leftColX, leftY);
    leftY += 4.2;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(90, 90, 100);
    const splitVal = doc.splitTextToSize(value, leftColWidth);
    doc.text(splitVal, leftColX, leftY, { lineHeightFactor: 1.25 });
    leftY += splitVal.length * 3.8 + 2.5;
  };

  renderContactItem('Phone', '+374 98 008 244');
  renderContactItem('Email', 'annamergeryan2000@gmail.com');
  renderContactItem('Behance (ux/ui)', 'https://www.behance.net/\nannamergeryan2');
  renderContactItem('Behance (graphic design)', 'https://www.behance.net/\nannamergeryan2');
  renderContactItem('Instagram', 'https://www.instagram.com/\ndesigns.byann');

  leftY += 2;

  // EDUCATION (Exact from PDF)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(24, 24, 27);
  doc.text('Education', leftColX, leftY);
  leftY += 6;

  const renderEduItem = (period: string, degree: string, school: string) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(110, 110, 120);
    doc.text(period, leftColX, leftY);
    leftY += 3.8;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(40, 40, 50);
    const splitDegree = doc.splitTextToSize(degree, leftColWidth);
    doc.text(splitDegree, leftColX, leftY, { lineHeightFactor: 1.2 });
    leftY += splitDegree.length * 3.6 + 0.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(80, 80, 90);
    const splitSchool = doc.splitTextToSize(school, leftColWidth);
    doc.text(splitSchool, leftColX, leftY, { lineHeightFactor: 1.25 });
    leftY += splitSchool.length * 3.6 + 3.5;
  };

  renderEduItem(
    '2018–2022',
    'Graphic Design (bachelor\'s degree)',
    'National University of Architecture and Construction of Armenia'
  );

  renderEduItem(
    '2023–2024',
    'UX Research',
    'Baymard Institute (An Independent Web UX Research Institute)'
  );

  leftY += 2;

  // SKILLS (Exact from PDF)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(24, 24, 27);
  doc.text('Skills', leftColX, leftY);
  leftY += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(70, 70, 80);
  const skillsText = "Figma, Claude, Illustrator, Photoshop, Firefly, Google AI studio, Stitch, XD, Corel Draw";
  const splitSkills = doc.splitTextToSize(skillsText, leftColWidth);
  doc.text(splitSkills, leftColX, leftY, { lineHeightFactor: 1.4 });

  // ---------------- RIGHT COLUMN (Experience & Certificates) ----------------
  let rightY = margin + 56;

  // EXPERIENCE (Exact from PDF)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(24, 24, 27);
  doc.text('Experience', rightColX, rightY);
  rightY += 8;

  const experiences = [
    { period: '2025–present', role: 'Product designer | Graphic designer', company: 'NCM technology' },
    { period: '2025–2026', role: 'UI/UX Designer', company: 'Haysell' },
    { period: '2022–2026', role: 'Product Designer', company: 'Persona business academy, Skillbook' },
    { period: '2024–2025', role: 'UI/UX Designer', company: 'Sootrock LLC' },
    { period: '2023–2024', role: 'UI/UX Designer', company: 'Domus' },
    { period: '2021–2022', role: 'Graphic Designer', company: 'Gama Marketing Agency' },
    { period: '2020–2021', role: 'Graphic Designer', company: 'Champions Football School' },
  ];

  experiences.forEach((exp) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(110, 110, 120);
    doc.text(exp.period, rightColX, rightY);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(30, 30, 40);
    doc.text(exp.role, rightColX + 28, rightY);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(80, 80, 90);
    doc.text(exp.company, rightColX + 28, rightY + 4.2);

    rightY += 11.5;
  });

  rightY += 4;

  // CERTIFICATES (Exact from PDF)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(24, 24, 27);
  doc.text('Certificates', rightColX, rightY);
  rightY += 8;

  const certificates = [
    { year: '2023', title: 'Commemorative Coin Competition', org: 'Central Bank of Armenia' },
    { year: '2022', title: 'UX/UI Design', org: 'Udemy' },
    { year: '2022', title: 'UX/UI Design', org: 'Persona Business Academy' },
    { year: '2021', title: 'Social Media Marketing', org: 'Insta Business' },
    { year: '2020', title: 'Web Design', org: 'Armbit' },
  ];

  certificates.forEach((cert) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(110, 110, 120);
    doc.text(cert.year, rightColX, rightY);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(30, 30, 40);
    doc.text(cert.title, rightColX + 28, rightY);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(80, 80, 90);
    doc.text(cert.org, rightColX + 28, rightY + 4.2);

    rightY += 10;
  });

  // Trigger download
  doc.save('Anna_Mergeryan_Resume.pdf');
}
