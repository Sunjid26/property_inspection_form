
        let uploadedFiles = [];

        function generateRoomSections() {
            const bedrooms = parseInt(document.getElementById('bedrooms').value) || 0;
            const bathrooms = parseInt(document.getElementById('bathrooms').value) || 0;
            const container = document.getElementById('roomSections');
            
            let html = '';
            
            // Generate bedroom sections with enhanced questions
            for (let i = 1; i <= bedrooms; i++) {
                html += `
                    <div class="section">
                        <div class="section-header">
                            <div class="section-icon">🛏️</div>
                            <h2>Bedroom ${i}</h2>
                        </div>
                        
                        <div class="form-grid">
                            <div class="form-group">
                                <label>Lights work?</label>
                                <div class="radio-group">
                                    <div class="radio-option">
                                        <input type="radio" name="bedroom${i}Lights" value="yes">
                                        <span class="radio-label">✅ Yes</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bedroom${i}Lights" value="no">
                                        <span class="radio-label">❌ No</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bedroom${i}Lights" value="na">
                                        <span class="radio-label">➖ N/A</span>
                                    </div>
                                </div>
                            <div class="comment-box" style="display:none; margin-top:10px;"><textarea name="bedroom${i}LightsComment" placeholder="Please describe the issue..."></textarea></div></div>

                            <div class="form-group">
                                <label>Outlets work?</label>
                                <div class="radio-group">
                                    <div class="radio-option">
                                        <input type="radio" name="bedroom${i}Outlets" value="yes">
                                        <span class="radio-label">✅ Yes</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bedroom${i}Outlets" value="no">
                                        <span class="radio-label">❌ No</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bedroom${i}Outlets" value="na">
                                        <span class="radio-label">➖ N/A</span>
                                    </div>
                                </div>
                            <div class="comment-box" style="display:none; margin-top:10px;"><textarea name="bedroom${i}OutletsComment" placeholder="Please describe the issue..."></textarea></div></div>

                            <div class="form-group">
                                <label>Windows work?</label>
                                <div class="radio-group">
                                    <div class="radio-option">
                                        <input type="radio" name="bedroom${i}Windows" value="yes">
                                        <span class="radio-label">✅ Yes</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bedroom${i}Windows" value="no">
                                        <span class="radio-label">❌ No</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bedroom${i}Windows" value="na">
                                        <span class="radio-label">➖ N/A</span>
                                    </div>
                                </div>
                            <div class="comment-box" style="display:none; margin-top:10px;"><textarea name="bedroom${i}WindowsComment" placeholder="Please describe the issue..."></textarea></div></div>

                            <div class="form-group">
                                <label>Closet doors work?</label>
                                <div class="radio-group">
                                    <div class="radio-option">
                                        <input type="radio" name="bedroom${i}ClosetDoors" value="yes">
                                        <span class="radio-label">✅ Yes</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bedroom${i}ClosetDoors" value="no">
                                        <span class="radio-label">❌ No</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bedroom${i}ClosetDoors" value="na">
                                        <span class="radio-label">➖ N/A</span>
                                    </div>
                                </div>
                            <div class="comment-box" style="display:none; margin-top:10px;"><textarea name="bedroom${i}ClosetDoorsComment" placeholder="Please describe the issue..."></textarea></div></div>

                            <div class="form-group">
                                <label>Ceiling fan works (if present)?</label>
                                <div class="radio-group">
                                    <div class="radio-option">
                                        <input type="radio" name="bedroom${i}CeilingFan" value="yes">
                                        <span class="radio-label">✅ Yes</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bedroom${i}CeilingFan" value="no">
                                        <span class="radio-label">❌ No</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bedroom${i}CeilingFan" value="na">
                                        <span class="radio-label">➖ N/A</span>
                                    </div>
                                </div>
                            <div class="comment-box" style="display:none; margin-top:10px;"><textarea name="bedroom${i}CeilingFanComment" placeholder="Please describe the issue..."></textarea></div></div>

                            <div class="form-group">
                                <label>Flooring in good condition (no damage, stains, or loose areas)?</label>
                                <div class="radio-group">
                                    <div class="radio-option">
                                        <input type="radio" name="bedroom${i}Flooring" value="yes">
                                        <span class="radio-label">✅ Yes</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bedroom${i}Flooring" value="no">
                                        <span class="radio-label">❌ No</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bedroom${i}Flooring" value="na">
                                        <span class="radio-label">➖ N/A</span>
                                    </div>
                                </div>
                            <div class="comment-box" style="display:none; margin-top:10px;"><textarea name="bedroom${i}FlooringComment" placeholder="Please describe the issue..."></textarea></div></div>

                            <div class="form-group">
                                <label>Air conditioning/heating vents clear and working?</label>
                                <div class="radio-group">
                                    <div class="radio-option">
                                        <input type="radio" name="bedroom${i}HVAC" value="yes">
                                        <span class="radio-label">✅ Yes</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bedroom${i}HVAC" value="no">
                                        <span class="radio-label">❌ No</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bedroom${i}HVAC" value="na">
                                        <span class="radio-label">➖ N/A</span>
                                    </div>
                                </div>
                            <div class="comment-box" style="display:none; margin-top:10px;"><textarea name="bedroom${i}HVACComment" placeholder="Please describe the issue..."></textarea></div></div>

                            <div class="form-group">
                                <label>Walls and ceilings in good condition (no cracks, holes, or damage)?</label>
                                <div class="radio-group">
                                    <div class="radio-option">
                                        <input type="radio" name="bedroom${i}WallsCeiling" value="yes">
                                        <span class="radio-label">✅ Yes</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bedroom${i}WallsCeiling" value="no">
                                        <span class="radio-label">❌ No</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bedroom${i}WallsCeiling" value="na">
                                        <span class="radio-label">➖ N/A</span>
                                    </div>
                                </div>
                            <div class="comment-box" style="display:none; margin-top:10px;"><textarea name="bedroom${i}WallsCelComment" placeholder="Please describe the issue..."></textarea></div></div>
                        </div>

                        <div class="comment-box" style="display:none; margin-top:10px;"><textarea placeholder="Please describe the issue..."></textarea></div><div class="form-group">
                            <label>Bedroom ${i} Notes:</label>
                            <textarea name="bedroom${i}Notes" placeholder="Add any specific notes, issues, or observations for Bedroom ${i}..."></textarea>
                        </div>
                    </div>
                <div class="comment-box" style="display:none; margin-top:10px;"><textarea placeholder="Please describe the issue..."></textarea></div>`;
            }
            
            // Generate bathroom sections with enhanced questions
            for (let i = 1; i <= bathrooms; i++) {
                html += `
                    <div class="section">
                        <div class="section-header">
                            <div class="section-icon">🚿</div>
                            <h2>Bathroom ${i}</h2>
                        </div>
                        
                        <div class="form-grid">
                            <div class="form-group">
                                <label>Lights work?</label>
                                <div class="radio-group">
                                    <div class="radio-option">
                                        <input type="radio" name="bathroom${i}Lights" value="yes">
                                        <span class="radio-label">✅ Yes</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bathroom${i}Lights" value="no">
                                        <span class="radio-label">❌ No</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bathroom${i}Lights" value="na">
                                        <span class="radio-label">➖ N/A</span>
                                    </div>
                                </div>
                            <div class="comment-box" style="display:none; margin-top:10px;"><textarea name="bathroom${i}LightsComment" placeholder="Please describe the issue..."></textarea></div></div>

                            <div class="form-group">
                                <label>Outlets work (GFCI protected)?</label>
                                <div class="radio-group">
                                    <div class="radio-option">
                                        <input type="radio" name="bathroom${i}Outlets" value="yes">
                                        <span class="radio-label">✅ Yes</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bathroom${i}Outlets" value="no">
                                        <span class="radio-label">❌ No</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bathroom${i}Outlets" value="na">
                                        <span class="radio-label">➖ N/A</span>
                                    </div>
                                </div>
                            <div class="comment-box" style="display:none; margin-top:10px;"><textarea name="bathroom${i}OutltComment" placeholder="Please describe the issue..."></textarea></div></div>

                            <div class="form-group">
                                <label>Toilet flushes properly and no leaks?</label>
                                <div class="radio-group">
                                    <div class="radio-option">
                                        <input type="radio" name="bathroom${i}Toilet" value="yes">
                                        <span class="radio-label">✅ Yes</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bathroom${i}Toilet" value="no">
                                        <span class="radio-label">❌ No</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bathroom${i}Toilet" value="na">
                                        <span class="radio-label">➖ N/A</span>
                                    </div>
                                </div>
                            <div class="comment-box" style="display:none; margin-top:10px;"><textarea name="bathroom${i}ToiletComment" placeholder="Please describe the issue..."></textarea></div></div>

                            <div class="form-group">
                                <label>Sink and faucet work properly?</label>
                                <div class="radio-group">
                                    <div class="radio-option">
                                        <input type="radio" name="bathroom${i}Sink" value="yes">
                                        <span class="radio-label">✅ Yes</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bathroom${i}Sink" value="no">
                                        <span class="radio-label">❌ No</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bathroom${i}Sink" value="na">
                                        <span class="radio-label">➖ N/A</span>
                                    </div>
                                </div>
                            <div class="comment-box" style="display:none; margin-top:10px;"><textarea name="bathroom${i}SinkComment" placeholder="Please describe the issue..."></textarea></div></div>

                            <div class="form-group">
                                <label>Shower/tub works with good water pressure?</label>
                                <div class="radio-group">
                                    <div class="radio-option">
                                        <input type="radio" name="bathroom${i}ShowerTub" value="yes">
                                        <span class="radio-label">✅ Yes</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bathroom${i}ShowerTub" value="no">
                                        <span class="radio-label">❌ No</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bathroom${i}ShowerTub" value="na">
                                        <span class="radio-label">➖ N/A</span>
                                    </div>
                                </div>
                            <div class="comment-box" style="display:none; margin-top:10px;"><textarea name="bathroom${i}ShowerComment" placeholder="Please describe the issue..."></textarea></div></div>

                            <div class="form-group">
                                <label>Exhaust fan works?</label>
                                <div class="radio-group">
                                    <div class="radio-option">
                                        <input type="radio" name="bathroom${i}ExhaustFan" value="yes">
                                        <span class="radio-label">✅ Yes</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bathroom${i}ExhaustFan" value="no">
                                        <span class="radio-label">❌ No</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bathroom${i}ExhaustFan" value="na">
                                        <span class="radio-label">➖ N/A</span>
                                    </div>
                                </div>
                            <div class="comment-box" style="display:none; margin-top:10px;"><textarea name="bathroom${i}ExFanComment" placeholder="Please describe the issue..."></textarea></div></div>

                            <div class="form-group">
                                <label>Caulking and grout in good condition?</label>
                                <div class="radio-group">
                                    <div class="radio-option">
                                        <input type="radio" name="bathroom${i}Caulking" value="yes">
                                        <span class="radio-label">✅ Yes</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bathroom${i}Caulking" value="no">
                                        <span class="radio-label">❌ No</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bathroom${i}Caulking" value="na">
                                        <span class="radio-label">➖ N/A</span>
                                    </div>
                                </div>
                            <div class="comment-box" style="display:none; margin-top:10px;"><textarea name="bathroom${i}CaulkComment" placeholder="Please describe the issue..."></textarea></div></div>

                            <div class="form-group">
                                <label>Flooring in good condition (no water damage or loose tiles)?</label>
                                <div class="radio-group">
                                    <div class="radio-option">
                                        <input type="radio" name="bathroom${i}Flooring" value="yes">
                                        <span class="radio-label">✅ Yes</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bathroom${i}Flooring" value="no">
                                        <span class="radio-label">❌ No</span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" name="bathroom${i}Flooring" value="na">
                                        <span class="radio-label">➖ N/A</span>
                                    </div>
                                </div>
                            <div class="comment-box" style="display:none; margin-top:10px;"><textarea name="bathroom${i}FloorComment" placeholder="Please describe the issue..."></textarea></div></div>
                        </div>

                        <div class="comment-box" style="display:none; margin-top:10px;"><textarea placeholder="Please describe the issue..."></textarea></div><div class="form-group">
                            <label>Bathroom ${i} Notes:</label>
                            <textarea name="bathroom${i}Notes" placeholder="Add any specific notes, issues, or observations for Bathroom ${i}..."></textarea>
                        </div>
                    </div>
                <div class="comment-box" style="display:none; margin-top:10px;"><textarea placeholder="Please describe the issue..."></textarea></div>`;
            }
            
            container.innerHTML = html;
            
            // Add event listeners for radio buttons
            addRadioButtonListeners();
            updateProgress();
            bindCommentBoxListeners();
        }

        function addRadioButtonListeners() {
            const radioOptions = document.querySelectorAll('.radio-option');
            radioOptions.forEach(option => {
                option.addEventListener('click', function() {
                    const radio = this.querySelector('input[type="radio"]');
                    const radioGroup = this.parentNode;
                    
                    // Remove selected class from all options in this group
                    radioGroup.querySelectorAll('.radio-option').forEach(opt => {
                        opt.classList.remove('selected');
                    });
                    
                    // Add selected class to clicked option
                    this.classList.add('selected');
                    radio.checked = true;
                    
                    updateProgress();
                });
            });
        }

        function updateProgress() {
            const allRadioGroups = document.querySelectorAll('.radio-group');
            let completedCount = 0;
            
            allRadioGroups.forEach(group => {
                const checkedRadio = group.querySelector('input[type="radio"]:checked');
                if (checkedRadio) {
                    completedCount++;
                }
            });
            
            const totalCount = allRadioGroups.length;
            const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
            
            // Update progress bar
            const progressBar = document.getElementById('progressBar');
            if (progressBar) {
                progressBar.style.width = progressPercent + '%';
            }
            
            // Update stats
            const completionStats = document.getElementById('completionStats');
            if (completionStats && totalCount > 0) {
                completionStats.style.display = 'flex';
                document.getElementById('completedCount').textContent = completedCount;
                document.getElementById('totalCount').textContent = totalCount;
                document.getElementById('progressPercent').textContent = progressPercent + '%';
            }
        }

        // File upload functionality
        function initializeFileUpload() {
            const uploadArea = document.getElementById('uploadArea');
            const fileInput = document.getElementById('mediaFiles');
            const fileList = document.getElementById('fileList');

            // Click to upload
            uploadArea.addEventListener('click', () => fileInput.click());

            // Drag and drop
            uploadArea.addEventListener('dragover', (e) => {
                e.preventDefault();
                uploadArea.classList.add('dragover');
            });

            uploadArea.addEventListener('dragleave', () => {
                uploadArea.classList.remove('dragover');
            });

            uploadArea.addEventListener('drop', (e) => {
                e.preventDefault();
                uploadArea.classList.remove('dragover');
                const files = Array.from(e.dataTransfer.files);
                handleFiles(files);
            });

            fileInput.addEventListener('change', (e) => {
                const files = Array.from(e.target.files);
                handleFiles(files);
            });

            function handleFiles(files) {
                files.forEach(file => {
                    if (file.size <= 50 * 1024 * 1024) { // 50MB limit
                        uploadedFiles.push(file);
                        addFileToList(file);
                    } else {
                        alert(`File "${file.name}" is too large. Maximum size is 50MB.`);
                    }
                });
            }

            function addFileToList(file) {
                const fileItem = document.createElement('div');
                fileItem.className = 'file-item';
                fileItem.innerHTML = `
                    <div class="file-info">
                        <div class="file-type-icon">${getFileIcon(file.type)}</div>
                        <div class="file-details">
                            <div class="file-name">${file.name}</div>
                            <div class="file-size">${formatFileSize(file.size)}</div>
                        </div>
                    <div class="comment-box" style="display:none; margin-top:10px;"><textarea placeholder="Please describe the issue..."></textarea></div></div>
                    <button class="remove-file" onclick="removeFile('${file.name}')">Remove</button>
                `;
                fileList.appendChild(fileItem);
            }

            function getFileIcon(fileType) {
                if (fileType.startsWith('image/')) return '🖼️';
                if (fileType.startsWith('video/')) return '🎥';
                return '📄';
            }

            function formatFileSize(bytes) {
                if (bytes === 0) return '0 Bytes';
                const k = 1024;
                const sizes = ['Bytes', 'KB', 'MB', 'GB'];
                const i = Math.floor(Math.log(bytes) / Math.log(k));
                return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
            }
        }

        function removeFile(fileName) {
            uploadedFiles = uploadedFiles.filter(file => file.name !== fileName);
            const fileList = document.getElementById('fileList');
            const fileItems = fileList.querySelectorAll('.file-item');
            fileItems.forEach(item => {
                if (item.querySelector('.file-name').textContent === fileName) {
                    item.remove();
                }
            });
        }

        // Form submission
        function handleFormSubmit(e) {
            e.preventDefault();
            
            // Validate required fields
            const requiredFields = document.querySelectorAll('.required-field input, .required-field select');
            let isValid = true;
            
            requiredFields.forEach(field => {
                const formGroup = field.closest('.form-group');
                const errorMessage = formGroup.querySelector('.error-message');
                
                if (!field.value) {
                    formGroup.classList.add('error');
                    if (errorMessage) errorMessage.style.display = 'block';
                    isValid = false;
                } else {
                    formGroup.classList.remove('error');
                    if (errorMessage) errorMessage.style.display = 'none';
                }
            });
            
            if (isValid) {
                // Collect form data
                const formData = new FormData(e.target);
                
                // Add uploaded files
                uploadedFiles.forEach(file => {
                    formData.append('uploadedFiles[]', file);
                });
                
                // Here you would normally send the data to a server
    
    // === Generate PDF ===
    const pdfBlob = generatePdf(formData); // generatePdf returns a Blob

    // Attach PDF to FormData
    formData.append("inspectionReport", pdfBlob, "inspection.pdf");            
    // Convert FormData to plain object
    const plainData = Object.fromEntries(formData.entries());

    // Send data to n8n webhook
    fetch('https://primary-production-f6af0.up.railway.app/webhook-test/property_inspection_form', {
        method: 'POST',
        //headers: { 'Content-Type': 'application/json' },
        //body: JSON.stringify(plainData)
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Inspection submitted successfully!');
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error submitting form. Please try again.');
    });
    } else {
                alert('Please fill in all required fields before submitting.');
            }
        }

    function generatePdf(formData) {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            // === Header ===
            doc.setFont("helvetica", "bold");
            doc.setFontSize(18);
            doc.text("Property Inspection Report", 105, 20, { align: "center" });

            doc.setFontSize(11);
            doc.setFont("helvetica", "normal");
            doc.text("Generated on: " + new Date().toLocaleString(), 105, 28, { align: "center" });

            // Line separator
            doc.setLineWidth(0.5);
            doc.line(20, 35, 190, 35);

            // === Form Data ===
            let y = 45;
            doc.setFontSize(12);

            for (const [key, value] of formData.entries()) {
                doc.setFont("helvetica", "bold");
                const wrappedKey = doc.splitTextToSize(`${key}:`, 50);
                doc.text(wrappedKey, 20, y);

                doc.setFont("helvetica", "normal");
                const wrappedValue = doc.splitTextToSize(`${value}`, 120);
                doc.text(wrappedValue, 70, y);
                
                const keyHeight = wrappedKey.length * 5;
                const valueHeight = wrappedValue.length * 5;
                y += Math.max(keyHeight, valueHeight) + 3; // Add some space
                //y += (wrappedText.length * 10);

                if (y > 290) { 
                    doc.addPage();
                    y = 20;
                }
            }

            // === Footer ===
            doc.setFontSize(10);
            doc.setFont("helvetica", "italic");
            doc.text("End of Report", 105, 290, { align: "center" });
            // Return blob for sending
                return doc.output("blob");
}
        // Initialize everything when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Set today's date as default
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('inspectionDate').value = today;
            
            // Initialize file upload
            initializeFileUpload();
            
            // Add form submit handler
            document.getElementById('inspectionForm').addEventListener('submit', handleFormSubmit);
            
            // Add radio button listeners for existing elements
            addRadioButtonListeners();
            
            // Initial progress update
            updateProgress();
            bindCommentBoxListeners();
        });

        // Get query parameter value
        function getQueryParam(name) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name) || '';
        }

        document.addEventListener('DOMContentLoaded', function () {
            // Bedrooms (number input)
            const bedroomsValue = getQueryParam('bedrooms');
            if (bedroomsValue) {
                const bedroomsField = document.querySelector('#bedrooms');
                if (bedroomsField) {
                    bedroomsField.value = bedroomsValue;
                    // Trigger the room generation after setting value
                    generateRoomSections();
                }
            }

            // Bathrooms (number input)
            const bathroomsValue = getQueryParam('bathrooms');
            if (bathroomsValue) {
                const bathroomsField = document.querySelector('#bathrooms');
                if (bathroomsField) {
                    bathroomsField.value = bathroomsValue;
                    // Trigger the room generation after setting value
                    generateRoomSections();
                }
            }

            // Property Address (text field)
            const addressValue = getQueryParam('address');
            if (addressValue) {
                const addressField = document.querySelector('#propertyAddress');
                if (addressField) addressField.value = decodeURIComponent(addressValue);
            }

            // Slack channel (if you have this field)
            const channelValue = getQueryParam('channel');
            if (channelValue) {
                const channelField = document.querySelector('[name="channel"]');
                if (channelField) channelField.value = channelValue;
            }
        });

    
    

document.addEventListener("DOMContentLoaded", function () {
    const allGroups = document.querySelectorAll('.form-group');
    allGroups.forEach(group => {
        const noRadio = group.querySelector('input[type="radio"][value="no"]');
        const commentBox = group.querySelector('.comment-box');
        if (noRadio && commentBox) {
            const radios = group.querySelectorAll('input[type="radio"]');
            radios.forEach(radio => {
                radio.addEventListener('change', function () {
                    if (this.value === 'no') {
                        commentBox.style.display = 'block';
                    } else {
                        commentBox.style.display = 'none';
                    }
                });
            });
        }
    });
});

/* ---- Delegated comment-box toggle: no edits to existing code ---- */
document.addEventListener('click', function (e) {
    const option = e.target.closest('.radio-option');
    if (!option) return;
    const group = option.closest('.form-group');
    if (!group) return;
    const commentBox = group.querySelector('.comment-box');
    if (!commentBox) return;
    const selected = group.querySelector('input[type="radio"]:checked');
    commentBox.style.display = (selected && selected.value === 'no') ? 'block' : 'none';
});

// Also handle keyboard/label-driven selection
document.addEventListener('change', function (e) {
    if (!e.target.matches('input[type="radio"]')) return;
    const group = e.target.closest('.form-group');
    if (!group) return;
    const commentBox = group.querySelector('.comment-box');
    if (!commentBox) return;
    commentBox.style.display = (e.target.value === 'no') ? 'block' : 'none';
});

// Initialize once on load
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.form-group').forEach(group => {
        const commentBox = group.querySelector('.comment-box');
        if (!commentBox) return;
        const selected = group.querySelector('input[type="radio"]:checked');
        commentBox.style.display = (selected && selected.value === 'no') ? 'block' : 'none';
    });
});


function bindCommentBoxListeners() {
    document.querySelectorAll('.form-group').forEach(group => {
        const commentBox = group.querySelector('.comment-box');
        if (!commentBox) return;
        group.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.addEventListener('change', function () {
                commentBox.style.display = (this.value === 'no') ? 'block' : 'none';
            });
        });
    });
}

