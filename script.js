let savedSizes = [];

    function isDesktopMode() {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /mobile|android|iphone|ipad|tablet/i.test(userAgent);
      const isDesktopRequest = userAgent.includes("applewebkit") && userAgent.includes("safari") && !userAgent.includes("mobile");
      return !isMobile || isDesktopRequest || window.innerWidth >= 1024;
    }

    document.addEventListener('DOMContentLoaded', function() {
      const viewport = document.querySelector('meta[name="viewport"]');
      if (!isDesktopMode()) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=1.0, user-scalable=yes');
      } else {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes');
      }

      showSection('foot-section');
    });

    function toggleSidebar() {
      const sidebar = document.getElementById('sidebar');
      const mainContent = document.getElementById('main-content');
      if (sidebar.style.width === '200px') {
        sidebar.style.width = '0';
        mainContent.style.marginRight = '0';
      } else {
        sidebar.style.width = '200px';
        mainContent.style.marginRight = '200px';
      }
    }

    function showSection(sectionId) {
      const sections = document.querySelectorAll('main section');
      sections.forEach(section => {
        section.classList.add('hidden');
      });

      const selectedSection = document.getElementById(sectionId);
      if (selectedSection) {
        selectedSection.classList.remove('hidden');
      }

      toggleSidebar();
    }

    function searchFootSize() {
      const footSize = parseFloat(document.getElementById('foot-size').value);
      const gender = document.getElementById('foot-gender').value;
      const resultField = document.getElementById('foot-result');
      if (!footSize || !gender) {
        resultField.value = 'กรุณากรอกขนาดเท้าและเลือกเพศ';
        return;
      }
      let size = '';
      const tableRows = document.querySelectorAll('#foot-table tbody tr');
      tableRows.forEach(row => {
        const range = row.cells[0].textContent.split(' - ');
        const min = parseFloat(range[0]);
        const max = parseFloat(range[1]);
        if (footSize >= min && footSize <= max) {
          size = gender === 'male' ? row.cells[1].textContent : row.cells[2].textContent;
        }
      });
      resultField.value = size ? `ขนาดรองเท้า: ${size} (EU)` : 'ไม่มีขนาดที่เหมาะสม';
    }

    function saveFootSize() {
      const result = document.getElementById('foot-result').value;
      if (result && !result.includes('กรุณา') && !result.includes('ไม่มี')) {
        savedSizes.push(`เท้า: ${result}`);
        alert('บันทึกขนาดเท้าสำเร็จ!');
      } else {
        alert('กรุณาค้นหาขนาดก่อนบันทึก!');
      }
    }

    function toggleFootTable() {
      const table = document.getElementById('foot-table');
      const button = document.getElementById('foot-toggle-btn');
      const buttonText = button.querySelector('span');
      const isHidden = table.classList.toggle('hidden');
      if (isHidden) {
        buttonText.textContent = 'เปิดตารางขนาด';
        button.querySelector('i').classList.remove('fa-eye-slash');
        button.querySelector('i').classList.add('fa-eye');
      } else {
        buttonText.textContent = 'ปิดตารางขนาด';
        button.querySelector('i').classList.remove('fa-eye');
        button.querySelector('i').classList.add('fa-eye-slash');
      }
    }

    function searchShirtSize() {
      const chestSize = parseFloat(document.getElementById('chest-size').value);
      const gender = document.getElementById('shirt-gender').value;
      const resultField = document.getElementById('shirt-result');
      if (!chestSize || !gender) {
        resultField.value = 'กรุณากรอกรอบอกและเลือกเพศ';
        return;
      }
      let size = '';
      const tableRows = document.querySelectorAll('#shirt-table tbody tr');
      tableRows.forEach(row => {
        const range = row.cells[0].textContent.split(' - ');
        const min = parseFloat(range[0]);
        const max = parseFloat(range[1]);
        if (chestSize >= min && chestSize <= max) {
          size = gender === 'male' ? row.cells[1].textContent : row.cells[2].textContent;
        }
      });
      resultField.value = size ? `ขนาดเสื้อ: ${size}` : 'ไม่มีขนาดที่เหมาะสม';
    }

    function saveShirtSize() {
      const result = document.getElementById('shirt-result').value;
      if (result && !result.includes('กรุณา') && !result.includes('ไม่มี')) {
        savedSizes.push(`เสื้อ: ${result}`);
        alert('บันทึกขนาดเสื้อสำเร็จ!');
      } else {
        alert('กรุณาค้นหาขนาดก่อนบันทึก!');
      }
    }

    function toggleShirtTable() {
      const table = document.getElementById('shirt-table');
      const button = document.getElementById('shirt-toggle-btn');
      const buttonText = button.querySelector('span');
      const isHidden = table.classList.toggle('hidden');
      if (isHidden) {
        buttonText.textContent = 'เปิดตารางขนาด';
        button.querySelector('i').classList.remove('fa-eye-slash');
        button.querySelector('i').classList.add('fa-eye');
      } else {
        buttonText.textContent = 'ปิดตารางขนาด';
        button.querySelector('i').classList.remove('fa-eye');
        button.querySelector('i').classList.add('fa-eye-slash');
      }
    }

    function searchRingSize() {
      const ringSize = parseFloat(document.getElementById('ring-size').value);
      const resultField = document.getElementById('ring-result');
      if (!ringSize) {
        resultField.value = 'กรุณากรอกรอบนิ้ว';
        return;
      }
      let size = '';
      const tableRows = document.querySelectorAll('#ring-table tbody tr');
      tableRows.forEach(row => {
        const range = row.cells[0].textContent.split(' - ');
        const min = parseFloat(range[0]);
        const max = parseFloat(range[1]);
        if (ringSize >= min && ringSize <= max) {
          size = row.cells[1].textContent;
        }
      });
      resultField.value = size ? `ขนาดแหวน: ${size} (US)` : 'ไม่มีขนาดที่เหมาะสม';
    }

    function saveRingSize() {
      const result = document.getElementById('ring-result').value;
      if (result && !result.includes('กรุณา') && !result.includes('ไม่มี')) {
        savedSizes.push(`แหวน: ${result}`);
        alert('บันทึกขนาดแหวนสำเร็จ!');
      } else {
        alert('กรุณาค้นหาขนาดก่อนบันทึก!');
      }
    }

    function toggleRingTable() {
      const table = document.getElementById('ring-table');
      const button = document.getElementById('ring-toggle-btn');
      const buttonText = button.querySelector('span');
      const isHidden = table.classList.toggle('hidden');
      if (isHidden) {
        buttonText.textContent = 'เปิดตารางขนาด';
        button.querySelector('i').classList.remove('fa-eye-slash');
        button.querySelector('i').classList.add('fa-eye');
      } else {
        buttonText.textContent = 'ปิดตารางขนาด';
        button.querySelector('i').classList.remove('fa-eye');
        button.querySelector('i').classList.add('fa-eye-slash');
      }
    }

    function searchHatSize() {
      const headSize = parseFloat(document.getElementById('head-size').value);
      const resultField = document.getElementById('hat-result');
      if (!headSize) {
        resultField.value = 'กรุณากรอกรอบศีรษะ';
        return;
      }
      let size = '';
      const tableRows = document.querySelectorAll('#hat-table tbody tr');
      tableRows.forEach(row => {
        const range = row.cells[0].textContent.split(' - ');
        const min = parseFloat(range[0]);
        const max = parseFloat(range[1]);
        if (headSize >= min && headSize <= max) {
          size = row.cells[1].textContent;
        }
      });
      resultField.value = size ? `ขนาดหมวก: ${size}` : 'ไม่มีขนาดที่เหมาะสม';
    }

    function saveHatSize() {
      const result = document.getElementById('hat-result').value;
      if (result && !result.includes('กรุณา') && !result.includes('ไม่มี')) {
        savedSizes.push(`หมวก: ${result}`);
        alert('บันทึกขนาดหมวกสำเร็จ!');
      } else {
        alert('กรุณาค้นหาขนาดก่อนบันทึก!');
      }
    }

    function toggleHatTable() {
      const table = document.getElementById('hat-table');
      const button = document.getElementById('hat-toggle-btn');
      const buttonText = button.querySelector('span');
      const isHidden = table.classList.toggle('hidden');
      if (isHidden) {
        buttonText.textContent = 'เปิดตารางขนาด';
        button.querySelector('i').classList.remove('fa-eye-slash');
        button.querySelector('i').classList.add('fa-eye');
      } else {
        buttonText.textContent = 'ปิดตารางขนาด';
        button.querySelector('i').classList.remove('fa-eye');
        button.querySelector('i').classList.add('fa-eye-slash');
      }
    }

    function searchWaistSize() {
      const waistSize = parseFloat(document.getElementById('waist-size').value);
      const resultField = document.getElementById('waist-result');
      if (!waistSize) {
        resultField.value = 'กรุณากรอกรอบเอว';
        return;
      }
      let size = '';
      const tableRows = document.querySelectorAll('#waist-table tbody tr');
      tableRows.forEach(row => {
        const range = row.cells[0].textContent.split(' - ');
        const min = parseFloat(range[0]);
        const max = parseFloat(range[1]);
        if (waistSize >= min && waistSize <= max) {
          size = row.cells[1].textContent;
        }
      });
      resultField.value = size ? `ขนาดเอว: ${size}` : 'ไม่มีขนาดที่เหมาะสม';
    }

    function saveWaistSize() {
      const result = document.getElementById('waist-result').value;
      if (result && !result.includes('กรุณา') && !result.includes('ไม่มี')) {
        savedSizes.push(`เอว: ${result}`);
        alert('บันทึกขนาดเอวสำเร็จ!');
      } else {
        alert('กรุณาค้นหาขนาดก่อนบันทึก!');
      }
    }

    function toggleWaistTable() {
      const table = document.getElementById('waist-table');
      const button = document.getElementById('waist-toggle-btn');
      const buttonText = button.querySelector('span');
      const isHidden = table.classList.toggle('hidden');
      if (isHidden) {
        buttonText.textContent = 'เปิดตารางขนาด';
        button.querySelector('i').classList.remove('fa-eye-slash');
        button.querySelector('i').classList.add('fa-eye');
      } else {
        buttonText.textContent = 'ปิดตารางขนาด';
        button.querySelector('i').classList.remove('fa-eye');
        button.querySelector('i').classList.add('fa-eye-slash');
      }
    }

    function searchNeckSize() {
      const neckSize = parseFloat(document.getElementById('neck-size').value);
      const resultField = document.getElementById('neck-result');
      if (!neckSize) {
        resultField.value = 'กรุณากรอกรอบคอ';
        return;
      }
      let size = '';
      const tableRows = document.querySelectorAll('#neck-table tbody tr');
      tableRows.forEach(row => {
        const range = row.cells[0].textContent.split(' - ');
        const min = parseFloat(range[0]);
        const max = parseFloat(range[1]);
        if (neckSize >= min && neckSize <= max) {
          size = row.cells[1].textContent;
        }
      });
      resultField.value = size ? `ขนาดคอ: ${size}` : 'ไม่มีขนาดที่เหมาะสม';
    }

    function saveNeckSize() {
      const result = document.getElementById('neck-result').value;
      if (result && !result.includes('กรุณา') && !result.includes('ไม่มี')) {
        savedSizes.push(`คอ: ${result}`);
        alert('บันทึกขนาดคอสำเร็จ!');
      } else {
        alert('กรุณาค้นหาขนาดก่อนบันทึก!');
      }
    }

    function toggleNeckTable() {
      const table = document.getElementById('neck-table');
      const button = document.getElementById('neck-toggle-btn');
      const buttonText = button.querySelector('span');
      const isHidden = table.classList.toggle('hidden');
      if (isHidden) {
        buttonText.textContent = 'เปิดตารางขนาด';
        button.querySelector('i').classList.remove('fa-eye-slash');
        button.querySelector('i').classList.add('fa-eye');
      } else {
        buttonText.textContent = 'ปิดตารางขนาด';
        button.querySelector('i').classList.remove('fa-eye');
        button.querySelector('i').classList.add('fa-eye-slash');
      }
    }

    function searchWristSize() {
      const wristSize = parseFloat(document.getElementById('wrist-size').value);
      const resultField = document.getElementById('wrist-result');
      if (!wristSize) {
        resultField.value = 'กรุณากรอกรอบข้อมือ';
        return;
      }
      let size = '';
      const tableRows = document.querySelectorAll('#wrist-table tbody tr');
      tableRows.forEach(row => {
        const range = row.cells[0].textContent.split(' - ');
        const min = parseFloat(range[0]);
        const max = parseFloat(range[1]);
        if (wristSize >= min && wristSize <= max) {
          size = row.cells[1].textContent;
        }
      });
      resultField.value = size ? `ขนาดข้อมือ: ${size}` : 'ไม่มีขนาดที่เหมาะสม';
    }

    function saveWristSize() {
      const result = document.getElementById('wrist-result').value;
      if (result && !result.includes('กรุณา') && !result.includes('ไม่มี')) {
        savedSizes.push(`ข้อมือ: ${result}`);
        alert('บันทึกขนาดข้อมือสำเร็จ!');
      } else {
        alert('กรุณาค้นหาขนาดก่อนบันทึก!');
      }
    }

    function toggleWristTable() {
      const table = document.getElementById('wrist-table');
      const button = document.getElementById('wrist-toggle-btn');
      const buttonText = button.querySelector('span');
      const isHidden = table.classList.toggle('hidden');
      if (isHidden) {
        buttonText.textContent = 'เปิดตารางขนาด';
        button.querySelector('i').classList.remove('fa-eye-slash');
        button.querySelector('i').classList.add('fa-eye');
      } else {
        buttonText.textContent = 'ปิดตารางขนาด';
        button.querySelector('i').classList.remove('fa-eye');
        button.querySelector('i').classList.add('fa-eye-slash');
      }
    }