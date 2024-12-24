const fieldTemplates={newLoan:`
    <div class="form-row">
        <div class="form-group">
            <label class="form-label">Stage of Purchase *</label>
            <div class="radio-group">
                <label class="radio-option">
                    <input type="radio" name="stagePurchase" value="bought" checked> Bought
                </label>
                <label class="radio-option">
                    <input type="radio" name="stagePurchase" value="notBought"> Not Bought
                </label>
            </div>
            <div class="form-sublabel">Have you purchased your property?</div>
        </div>

        <div class="form-group">
            <label class="form-label">Fixed or Floating Rates *</label>
            <div class="radio-group">
                <label class="radio-option">
                    <input type="radio" name="rateType" value="both" checked> Both
                </label>
                <label class="radio-option">
                    <input type="radio" name="rateType" value="fixed"> Fixed
                </label>
                <label class="radio-option">
                    <input type="radio" name="rateType" value="floating"> Floating
                </label>
            </div>
            <div class="form-sublabel">Do you prefer fixed or floating rates?</div>
        </div>
    </div>

    <div class="form-row">
        <div class="form-group">
            <label class="form-label">Loan Amount *</label>
            <div class="input-group">
                <div class="input-group-icon">$</div>
                <input type="number" name="loanAmount" placeholder="Enter loan amount" required>
            </div>
             <div class="error-message">Loan amount is required</div>
        </div>

        <div class="form-group">
            <label class="form-label">Has Your Current Property Been Sold? *</label>
            <div class="radio-group">
                <label class="radio-option">
                    <input type="radio" name="propertySold" value="yes" > Yes
                </label>
                <label class="radio-option">
                    <input type="radio" name="propertySold" value="no" checked> No
                </label>
                <label class="radio-option">
                    <input type="radio" name="propertySold" value="na"> Not Applicable
                </label>
            </div>
        </div>
    </div>
`,refinance:`
    <div class="form-row">
        <div class="form-group">
            <label class="form-label">Fixed or Floating Rates *</label>
            <div class="radio-group">
                <label class="radio-option">
                    <input type="radio" name="rateType" value="both" checked> Both
                </label>
                <label class="radio-option">
                    <input type="radio" name="rateType" value="fixed"> Fixed
                </label>
                <label class="radio-option">
                    <input type="radio" name="rateType" value="floating"> Floating
                </label>
            </div>
            <div class="form-sublabel">Do you prefer fixed or floating rates?</div>
        </div>

        <div class="form-group">
            <label class="form-label">Existing Loan Amount *</label>
            <div class="input-group">
                <div class="input-group-icon">$</div>
                <input type="number" name="existingLoanAmount" placeholder="Enter existing loan amount" required>
            </div>
             <div class="error-message">Existing Loan Amount is required</div>
        </div>
    </div>

    <div class="form-row">
        <div class="form-group">
            <label class="form-label">Is Your Current Bank the Original Lender? *</label>
            <div class="radio-group">
                <label class="radio-option">
                    <input type="radio" name="originalLender" value="yes" checked> Yes
                </label>
                <label class="radio-option">
                    <input type="radio" name="originalLender" value="no"> No
                </label>
            </div>
        </div>

        <div class="form-group">
            <label class="form-label">Is Your Lock-in Period Over? *</label>
            <div class="radio-group">
                <label class="radio-option">
                    <input type="radio" name="lockInPeriod" value="yes" checked> Yes
                </label>
                <label class="radio-option">
                    <input type="radio" name="lockInPeriod" value="no"> No
                </label>
                <label class="radio-option">
                    <input type="radio" name="lockInPeriod" value="notSure"> I'm Not Sure
                </label>
            </div>
        </div>
    </div>

    <div class="form-row">
<div class="form-group">
    <label class="form-label">Current Financer *</label>
    <div class="custom-select-container">
        <div class="select-trigger">
            <div class="input-group-icon">🏦</div>
            <span class="selected-text">Select Bank</span>
            <div class="select-arrow"></div>
        </div>
        <div class="select-options">
            <div class="select-option" data-value="">
                <span>Select Bank</span>
            </div>
            <div class="select-option" data-value="dbs">
                <span>DBS</span>
                <img src="https://sgcondonewlaunch.com/wp-content/uploads/2024/12/DBS-Bank_idfxgaEFeS_1.png" alt="DBS">
            </div>
            <div class="select-option" data-value="hsbc">
                <span>HSBC</span>
                <img src="https://sgcondonewlaunch.com/wp-content/uploads/2024/12/hsbc_or.png" alt="HSBC">
            </div>
            <div class="select-option" data-value="dbs">
                <span>UOB</span>
            </div>
            <div class="select-option" data-value="anz">
                <span>RHB</span>
                <img src="https://sgcondonewlaunch.com/wp-content/uploads/2024/12/WhatsApp_Image_2024-09-14_at_19.53.48_a53c55b2-removebg-preview.png" alt="RHB">
            </div>
            <div class="select-option" data-value="mb">
                <span>MB</span>
                <img src="https://sgcondonewlaunch.com/wp-content/uploads/2024/12/maybank_logo-1.png" alt="MB">
            </div>
            <div class="select-option" data-value="ocbc">
                <span>OCBC</span>
                <img src="https://sgcondonewlaunch.com/wp-content/uploads/2024/12/ocbc-bank-seeklogo.png" alt="OCBC">
            </div>
            <div class="select-option" data-value="scb">
                <span>SCB</span>
                <img src="https://sgcondonewlaunch.com/wp-content/uploads/2024/12/scb.png" alt="SCB">
            </div>
            <div class="select-option" data-value="citi">
                <span>CITI</span>
                <img src="https://sgcondonewlaunch.com/wp-content/uploads/2024/12/citibank_logo.png" alt="CITI">
            </div>
            <div class="select-option" data-value="cimb">
                <span>CIMB</span>
                <img src="https://sgcondonewlaunch.com/wp-content/uploads/2024/12/cimb.png" alt="CIMB">
            </div>
            <div class="select-option" data-value="boc">
                <span>BOC</span>
                <img src="https://sgcondonewlaunch.com/wp-content/uploads/2024/12/boc.png" alt="BOC">
            </div>
            <div class="select-option" data-value="other">
                <span>Others</span>
            </div>
        </div>
        <input type="hidden" name="currentFinancer" required>
    </div>
    <div class="error-message">Please select your current financer</div>
</div>
<div class="form-group">
            <label class="form-label">Any Plan to Sell in the Next 1-3 Years? *</label>
            <div class="radio-group">
                <label class="radio-option">
                    <input type="radio" name="planToSell" value="yes" required> Yes
                </label>
                <label class="radio-option">
                    <input type="radio" name="planToSell" value="no"> No
                </label>
                <label class="radio-option">
                    <input type="radio" name="planToSell" value="not sure" checked> I'm not sure
                </label>
            </div>
        </div>
</div>
`,coupling:`
    <div class="form-row">
        <div class="form-group">
            <label class="form-label">Property Share of Owner 1 (Buyer) *</label>
            <div class="input-group percentage-input">
                <div class="input-group-icon">%</div>
                <input type="number" name="owner1Share" value="50" min="0" max="100" required>
            </div>
        </div>

        <div class="form-group">
            <label class="form-label">Property Share of Owner 2 (Seller) *</label>
            <div class="input-group percentage-input">
                <div class="input-group-icon">%</div>
                <input type="number" name="owner2Share" value="50" min="0" max="100" required>
            </div>
        </div>
    </div>

    <div class="form-row">
        <div class="form-group">
            <label class="form-label">CPF Usage of Owner 1 (Buyer) *</label>
            <div class="input-group">
                <div class="input-group-icon">$</div>
                <input type="number" name="owner1Cpf" placeholder="Enter CPF usage" required>
            </div>
        </div>

        <div class="form-group">
            <label class="form-label">CPF Usage of Owner 2 (Seller) *</label>
            <div class="input-group">
                <div class="input-group-icon">$</div>
                <input type="number" name="owner2Cpf" placeholder="Enter CPF usage" required>
            </div>
        </div>
    </div>

    <div class="form-row">
        <div class="form-group">
            <label class="form-label">Rough Market Price of Property *</label>
            <div class="input-group">
                <div class="input-group-icon">$</div>
                <input type="number" name="propertyPrice" placeholder="Enter property price" required>
            </div>
        </div>

        <div class="form-group">
            <label class="form-label">Is Your Property Fully Paid? *</label>
            <div class="radio-group">
                <label class="radio-option">
                    <input type="radio" name="fullyPaid" value="yes" checked> Yes
                </label>
                <label class="radio-option">
                    <input type="radio" name="fullyPaid" value="no"> No
                </label>
            </div>
        </div>
    </div>

    <div id="notFullyPaidFields" class="hidden">
        <div class="form-row">
            <div class="form-group">
                <label class="form-label">Existing Loan Amount *</label>
                <div class="input-group">
                    <div class="input-group-icon">$</div>
                    <input type="number" name="existingLoanAmount" placeholder="Enter existing loan amount">
                </div>
            </div>

            <div class="form-group">
                <label class="form-label">Current Bank *</label>
                <div class="custom-select-container">
                    <div class="select-trigger">
                        <div class="input-group-icon">🏦</div>
                        <span class="selected-text">Select Bank</span>
                        <div class="select-arrow"></div>
                    </div>
                    <div class="select-options">
                        <div class="select-option" data-value="">
                            <span>Select Bank</span>
                        </div>
                        <div class="select-option" data-value="dbs">
                <span>DBS</span>
                <img src="https://sgcondonewlaunch.com/wp-content/uploads/2024/12/DBS-Bank_idfxgaEFeS_1.png" alt="DBS">
            </div>
            <div class="select-option" data-value="hsbc">
                <span>HSBC</span>
                <img src="https://sgcondonewlaunch.com/wp-content/uploads/2024/12/hsbc_or.png" alt="HSBC">
            </div>
            <div class="select-option" data-value="dbs">
                <span>UOB</span>
            </div>
            <div class="select-option" data-value="anz">
                <span>RHB</span>
                <img src="https://sgcondonewlaunch.com/wp-content/uploads/2024/12/WhatsApp_Image_2024-09-14_at_19.53.48_a53c55b2-removebg-preview.png" alt="RHB">
            </div>
            <div class="select-option" data-value="mb">
                <span>MB</span>
                <img src="https://sgcondonewlaunch.com/wp-content/uploads/2024/12/maybank_logo-1.png" alt="MB">
            </div>
            <div class="select-option" data-value="ocbc">
                <span>OCBC</span>
                <img src="https://sgcondonewlaunch.com/wp-content/uploads/2024/12/ocbc-bank-seeklogo.png" alt="OCBC">
            </div>
            <div class="select-option" data-value="scb">
                <span>SCB</span>
                <img src="https://sgcondonewlaunch.com/wp-content/uploads/2024/12/scb.png" alt="SCB">
            </div>
            <div class="select-option" data-value="citi">
                <span>CITI</span>
                <img src="https://sgcondonewlaunch.com/wp-content/uploads/2024/12/citibank_logo.png" alt="CITI">
            </div>
            <div class="select-option" data-value="cimb">
                <span>CIMB</span>
                <img src="https://sgcondonewlaunch.com/wp-content/uploads/2024/12/cimb.png" alt="CIMB">
            </div>
            <div class="select-option" data-value="boc">
                <span>BOC</span>
                <img src="https://sgcondonewlaunch.com/wp-content/uploads/2024/12/boc.png" alt="BOC">
            </div>
            <div class="select-option" data-value="other">
                <span>Others</span>
            </div>
                    </div>
                    <input type="hidden" name="currentBank" required>
                </div>
                <div class="error-message">Please select your current financer</div>
            </div>
        </div>
    </div>
`,equity:`
    <div class="form-row">
        <div class="form-group">
            <label class="form-label">Is Your Property Fully Paid? *</label>
            <div class="radio-group">
                <label class="radio-option">
                    <input type="radio" name="fullyPaid" value="yes" checked> Yes
                </label>
                <label class="radio-option">
                    <input type="radio" name="fullyPaid" value="no"> No
                </label>
            </div>
        </div>

        <div class="form-group">
            <label class="form-label">Rough Market Price of Property *</label>
            <div class="input-group">
                <div class="input-group-icon">$</div>
                <input type="number" name="propertyPrice" placeholder="Enter property price" required>
            </div>
        </div>
    </div>

    <div class="form-row">
        <div class="form-group">
            <label class="form-label">Total CPF Usage of All Borrowers *</label>
            <div class="input-group">
                <div class="input-group-icon">$</div>
                <input type="number" name="totalCpfUsage" placeholder="Enter total CPF usage" required>
            </div>
        </div>

        <div class="form-group">
            <label class="form-label">Any Plan to Sell in the Next 1-3 Years? *</label>
            <div class="radio-group">
                <label class="radio-option">
                    <input type="radio" name="planToSell" value="yes" required> Yes
                </label>
                <label class="radio-option">
                    <input type="radio" name="planToSell" value="no"> No
                </label>
                <label class="radio-option">
                    <input type="radio" name="planToSell" value="not sure" checked> I'm not sure
                </label>
            </div>
        </div>
    </div>

    <div id="equityNotFullyPaidFields" class="hidden">
        <div class="form-row">
            <div class="form-group">
                <label class="form-label">Existing Loan Amount *</label>
                <div class="input-group">
                    <div class="input-group-icon">$</div>
                    <input type="number" name="existingLoanAmount" placeholder="Enter existing loan amount">
                </div>
            </div>

            <div class="form-group">
                <label class="form-label">Current Bank *</label>
                <div class="custom-select-container">
                    <div class="select-trigger">
                        <div class="input-group-icon">🏦</div>
                        <span class="selected-text">Select Bank</span>
                        <div class="select-arrow"></div>
                    </div>
                    <div class="select-options">
                        <div class="select-option" data-value="">
                            <span>Select Bank</span>
                        </div>
                        <div class="select-option" data-value="dbs">
                <span>DBS</span>
                <img src="https://sgcondonewlaunch.com/wp-content/uploads/2024/12/DBS-Bank_idfxgaEFeS_1.png" alt="DBS">
            </div>
            <div class="select-option" data-value="hsbc">
                <span>HSBC</span>
                <img src="https://sgcondonewlaunch.com/wp-content/uploads/2024/12/hsbc_or.png" alt="HSBC">
            </div>
            <div class="select-option" data-value="dbs">
                <span>UOB</span>
            </div>
            <div class="select-option" data-value="anz">
                <span>RHB</span>
                <img src="https://sgcondonewlaunch.com/wp-content/uploads/2024/12/WhatsApp_Image_2024-09-14_at_19.53.48_a53c55b2-removebg-preview.png" alt="RHB">
            </div>
            <div class="select-option" data-value="mb">
                <span>MB</span>
                <img src="https://sgcondonewlaunch.com/wp-content/uploads/2024/12/maybank_logo-1.png" alt="MB">
            </div>
            <div class="select-option" data-value="ocbc">
                <span>OCBC</span>
                <img src="https://sgcondonewlaunch.com/wp-content/uploads/2024/12/ocbc-bank-seeklogo.png" alt="OCBC">
            </div>
            <div class="select-option" data-value="scb">
                <span>SCB</span>
                <img src="https://sgcondonewlaunch.com/wp-content/uploads/2024/12/scb.png" alt="SCB">
            </div>
            <div class="select-option" data-value="citi">
                <span>CITI</span>
                <img src="https://sgcondonewlaunch.com/wp-content/uploads/2024/12/citibank_logo.png" alt="CITI">
            </div>
            <div class="select-option" data-value="cimb">
                <span>CIMB</span>
                <img src="https://sgcondonewlaunch.com/wp-content/uploads/2024/12/cimb.png" alt="CIMB">
            </div>
            <div class="select-option" data-value="boc">
                <span>BOC</span>
                <img src="https://sgcondonewlaunch.com/wp-content/uploads/2024/12/boc.png" alt="BOC">
            </div>
            <div class="select-option" data-value="other">
                <span>Others</span>
            </div>
                    </div>
                    <input type="hidden" name="currentBank" required>
                </div>
                <div class="error-message">Please select your current financer</div>
            </div>
        </div>
    </div>
`};

// Styles for loading and feedback
const styles = `
.loading-spinner {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

.feedback-message {
    position: fixed;
    bottom: -100px;
    right: 20px;
    padding: 15px 25px;
    border-radius: 5px;
    transition: top 0.5s ease-in-out;
    z-index: 1001;
}

.feedback-success {
    background: #4CAF50;
    color: white;
}

.feedback-error {
    background: #f44336;
    color: white;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}`;

function setupPercentageValidation() {
    const owner1ShareInput = document.querySelector('input[name="owner1Share"]');
    const owner2ShareInput = document.querySelector('input[name="owner2Share"]');
    
    if (!owner1ShareInput || !owner2ShareInput) return;

    const validateInput = (input) => {
        // Get the current value
        let value = parseInt(input.value) || 0;
        
        // Enforce limits
        if (value > 99) value = 99;
        if (value < 1 && input.value !== '') value = 1;
        
        return value;
    };

    const updateShares = (currentInput, otherInput) => {
        let value = validateInput(currentInput);
        
        // Only update if there's a value
        if (currentInput.value !== '') {
            currentInput.value = value;
            otherInput.value = 100 - value;
        }
    };

    // Remove any existing event listeners by cloning and replacing
    const newOwner1Input = owner1ShareInput.cloneNode(true);
    const newOwner2Input = owner2ShareInput.cloneNode(true);
    
    owner1ShareInput.parentNode.replaceChild(newOwner1Input, owner1ShareInput);
    owner2ShareInput.parentNode.replaceChild(newOwner2Input, owner2ShareInput);

    // Add input validation and update for both fields
    newOwner1Input.addEventListener('input', (e) => {
        // Prevent non-numeric input
        if (!/^\d*$/.test(e.target.value)) {
            e.target.value = e.target.value.replace(/[^\d]/g, '');
        }
        // Handle empty or invalid input
        if (e.target.value === '' || parseInt(e.target.value) === 0) {
            newOwner2Input.value = '';
            return;
        }
        updateShares(newOwner1Input, newOwner2Input);
    });

    newOwner2Input.addEventListener('input', (e) => {
        // Prevent non-numeric input
        if (!/^\d*$/.test(e.target.value)) {
            e.target.value = e.target.value.replace(/[^\d]/g, '');
        }
        // Handle empty or invalid input
        if (e.target.value === '' || parseInt(e.target.value) === 0) {
            newOwner1Input.value = '';
            return;
        }
        updateShares(newOwner2Input, newOwner1Input);
    });

    // Add blur handlers to ensure valid values when leaving fields
    newOwner1Input.addEventListener('blur', () => {
        if (newOwner1Input.value === '') {
            newOwner1Input.value = '50';
            newOwner2Input.value = '50';
        }
        updateShares(newOwner1Input, newOwner2Input);
    });

    newOwner2Input.addEventListener('blur', () => {
        if (newOwner2Input.value === '') {
            newOwner1Input.value = '50';
            newOwner2Input.value = '50';
        }
        updateShares(newOwner2Input, newOwner1Input);
    });
}

// Initialize form and add necessary elements
document.addEventListener('DOMContentLoaded', async () => {
    // Add styles and UI elements
    document.head.insertAdjacentHTML('beforeend', `<style>${styles}</style>`);
    document.body.insertAdjacentHTML('beforeend', `
        <div class="loading-spinner">
            <div class="spinner"></div>
        </div>
        <div class="feedback-message"></div>
    `);

    // Initialize form based on URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const loanType = urlParams.get('enquiry');
    
    if (loanType) {
        const radioButton = document.querySelector(`input[name="loanType"][value="${loanType}"]`);
        if (radioButton) {
            radioButton.checked = true;
            // First update the form fields
            await updateFormFields(loanType);
            // Then handle property type restrictions
            handlePropertyTypeRestrictions(loanType, true);
            // Finally initialize the custom select
            if (['refinance', 'coupling', 'equity'].includes(loanType)) {
                // Add a small delay to ensure DOM is ready
                setTimeout(() => {
                    initializeCustomSelect();
                }, 100);
            }
        }
    }

    // Setup event listeners
    setupEventListeners();
});


function setupEventListeners() {
    // Loan type change
    document.querySelectorAll('input[name="loanType"]').forEach(radio => {
        radio.addEventListener('change', async (e) => {
            const newLoanType = e.target.value;
            // First update form fields
            await updateFormFields(newLoanType);
            // Then handle property restrictions
            handlePropertyTypeRestrictions(newLoanType);
            // Finally reinitialize custom selects if needed
            if (['refinance', 'coupling', 'equity'].includes(newLoanType)) {
                setTimeout(() => {
                    initializeCustomSelect();
                }, 100);
            }
        });
    });

    // Property type change
    document.querySelectorAll('input[name="propertyType"]').forEach(radio => {
        radio.addEventListener('change', validatePropertyTypeSelection);
    });

    // Real-time validation for required fields
    document.querySelectorAll('input[required]').forEach(field => {
        field.addEventListener('blur', () => validateField(field));
        field.addEventListener('input', () => {
            const errorElement = field.parentElement.parentElement.querySelector('.error-message');
            if (errorElement) {
                errorElement.style.display = 'none';
            }
        });
    });

    // Form submission
    const form = document.getElementById('loanForm');
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }

    // Add initial setup for percentage validation if we're on coupling template
    const loanTypeRadio = document.querySelector('input[name="loanType"][value="coupling"]:checked');
    if (loanTypeRadio) {
        setupPercentageValidation();
    }
}

function validateField(field) {
    let isValid = true;
    const errorElement = field.parentElement.parentElement.querySelector('.error-message');
    
    // Clear previous error state
    field.parentElement.parentElement.classList.remove('error');
    if (errorElement) {
        errorElement.style.display = 'none';
    }

    // Check if field is empty
    if (!field.value.trim()) {
        isValid = false;
        const fieldName = field.parentElement.parentElement.querySelector('.form-label').textContent.replace('*', '').trim();
        if (errorElement) {
            errorElement.textContent = `${fieldName} field is required.`;
            errorElement.style.display = 'block';
        }
    }

    // Validate email format
    if (field.type === 'email' && field.value.trim()) {
        if (!isValidEmail(field.value)) {
            isValid = false;
            if (errorElement) {
                errorElement.textContent = 'Please enter a valid email address.';
                errorElement.style.display = 'block';
            }
        }
    }

    // Add validation for radio button groups
    if (field.type === 'radio') {
        const groupName = field.getAttribute('name');
        const isChecked = document.querySelector(`input[name="${groupName}"]:checked`);
        if (!isChecked) {
            const groupContainer = document.getElementById(`${groupName}Group`);
            const errorElement = groupContainer.querySelector('.error-message');
            if (errorElement) {
                errorElement.style.display = 'block';
            }
            isValid = false;
        }
    }

    if (!isValid) {
        field.parentElement.parentElement.classList.add('error');
    }

    return isValid;
}

// Define all possible fields for each loan type
const ALL_POSSIBLE_FIELDS = {
    commonFields: [
        'timestamp',
        'loanType',
        'propertyType',
        'name',
        'email',
        'contactNumber'
    ],
    newLoan: [
        'stagePurchase',
        'rateType',
        'loanAmount',
        'propertySold'
    ],
    refinance: [
        'rateType',
        'existingLoanAmount',
        'originalLender',
        'lockInPeriod',
        'currentFinancer'
    ],
    coupling: [
        'owner1Share',
        'owner2Share',
        'owner1Cpf',
        'owner2Cpf',
        'propertyPrice',
        'fullyPaid',
        'existingLoanAmount',
        'currentBank'
    ],
    equity: [
        'fullyPaid',
        'propertyPrice',
        'totalCpfUsage',
        'planToSell',
        'existingLoanAmount',
        'currentBank'
    ]
};

async function handleSubmit(e) {
    e.preventDefault();
    console.log('Form submission started');
    
    let isValid = true;
    const form = e.target;
    
    // Clear all previous errors
    form.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
    form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    
    // Validate all required fields
    form.querySelectorAll('[required]').forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });

    if (isValid) {
        const loadingSpinner = document.querySelector('.loading-spinner');
        loadingSpinner.style.display = 'flex';

        try {
            const formData = new FormData(form);
            const data = {};
            
            // Get selected loan type
            const selectedLoanType = form.querySelector('input[name="loanType"]:checked').value;
            
            // Initialize all possible fields with empty values
            [...ALL_POSSIBLE_FIELDS.commonFields, 
             ...ALL_POSSIBLE_FIELDS.newLoan,
             ...ALL_POSSIBLE_FIELDS.refinance,
             ...ALL_POSSIBLE_FIELDS.coupling,
             ...ALL_POSSIBLE_FIELDS.equity
            ].forEach(field => {
                data[field] = '';
            });

            // Update with actual form values
            formData.forEach((value, key) => {
                if (form.querySelector(`input[type="radio"][name="${key}"]`)) {
                    const checkedRadio = form.querySelector(`input[type="radio"][name="${key}"]:checked`);
                    if (checkedRadio) {
                        data[key] = checkedRadio.value;
                    }
                } else {
                    data[key] = value;
                }
            });

            // Add timestamp
            data.timestamp = new Date().toISOString();
            
            console.log('Submitting data:', data);
            
            const scriptURL = 'https://script.google.com/macros/s/AKfycbwTTZQiNUixuqcJmM_rIlIUemmQkKmPPVDWaL_VkFMKTrkCJPQ0yJ3bsMBESVYe89wM/exec';
            
            const response = await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify(data)
            });

            showFeedbackMessage('Form submitted successfully!', 'success');
            
            // Reset form and reinitialize based on URL parameter
            form.reset();
            
            // Get the loan type from URL parameter
            const urlParams = new URLSearchParams(window.location.search);
            const loanType = urlParams.get('enquiry');
            
            if (loanType) {
                const radioButton = document.querySelector(`input[name="loanType"][value="${loanType}"]`);
                if (radioButton) {
                    radioButton.checked = true;
                    updateFormFields(loanType);
                    handlePropertyTypeRestrictions(loanType);
                }
            } else {
                updateFormFields('');
            }
            
        } catch (error) {
            console.error('Submission error:', error);
            showFeedbackMessage('Error submitting form. Please try again.', 'error');
        } finally {
            loadingSpinner.style.display = 'none';
        }
    }
}

function showFeedbackMessage(message, type) {
    const feedbackElement = document.querySelector('.feedback-message');
    feedbackElement.textContent = message;
    feedbackElement.className = 'feedback-message feedback-' + type;
    feedbackElement.style.bottom = '20px';
    
    setTimeout(() => {
        feedbackElement.style.bottom = '-100px';
    }, 5000);
}

function updateFormFields(loanType) {
    return new Promise((resolve) => {
        const dynamicFields = document.getElementById('dynamicFields');
        
        // First, remove all existing custom select event listeners
        const existingSelects = dynamicFields.querySelectorAll('.custom-select-container');
        existingSelects.forEach(select => {
            const trigger = select.querySelector('.select-trigger');
            const options = select.querySelector('.select-options');
            if (trigger) {
                trigger.replaceWith(trigger.cloneNode(true));
            }
            if (options) {
                options.replaceWith(options.cloneNode(true));
            }
        });

        // Update the content
        dynamicFields.innerHTML = fieldTemplates[loanType] || '';

        if (loanType === 'coupling') {
            setupFullyPaidListeners();
            setupPercentageValidation(); // Add this line
        } else if (loanType === 'equity') {
            setupFullyPaidListeners();
        }

        // Allow time for DOM update
        setTimeout(() => {
            resolve();
        }, 50);
    });
}



function setupFullyPaidListeners() {
    document.querySelectorAll('input[name="fullyPaid"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            const notFullyPaidFields = document.getElementById('notFullyPaidFields');
            const equityNotFullyPaidFields = document.getElementById('equityNotFullyPaidFields');
            
            if (notFullyPaidFields) {
                notFullyPaidFields.classList.toggle('hidden', e.target.value === 'yes');
            }
            if (equityNotFullyPaidFields) {
                equityNotFullyPaidFields.classList.toggle('hidden', e.target.value === 'yes');
            }
        });
    });
}

// Toast notification functionality
class ToastNotification {
    constructor() {
        this.createToastContainer();
    }

    createToastContainer() {
        const container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    show(message, type = 'error') {
        const toast = document.createElement('div');
        toast.className = `toast-notification ${type}`;
        
        const icon = document.createElement('span');
        icon.className = 'toast-icon';
        icon.innerHTML = type === 'error' ? '⚠️' : 'ℹ️';
        
        const messageElement = document.createElement('span');
        messageElement.className = 'toast-message';
        messageElement.textContent = message;
        
        const closeBtn = document.createElement('button');
        closeBtn.className = 'toast-close';
        closeBtn.innerHTML = '×';
        closeBtn.onclick = () => toast.remove();

        toast.appendChild(icon);
        toast.appendChild(messageElement);
        toast.appendChild(closeBtn);
        
        document.getElementById('toast-container').appendChild(toast);

        // Auto remove after 5 seconds
        setTimeout(() => {
            toast.classList.add('fade-out');
            setTimeout(() => toast.remove(), 300);
        }, 5000);
    }
}

// Initialize toast notification
const toast = new ToastNotification();

// Function to handle initial URL parameters
function handleUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const enquiryType = urlParams.get('enquiry');
    
    if (enquiryType) {
        const radioButton = document.querySelector(`input[name="loanType"][value="${enquiryType}"]`);
        if (radioButton) {
            radioButton.checked = true;
            handlePropertyTypeRestrictions(enquiryType, true);
        }
    }
}

// Create a mapping object that can be used by both functions
const LOAN_DISPLAY_NAMES = {
    'coupling': 'Decoupling loan',
    'equity': 'Equity loan'
};

// Updated function to handle property type restrictions
function handlePropertyTypeRestrictions(loanType, isInitialLoad = false) {
    const hdbOption = document.querySelector('input[name="propertyType"][value="hdb"]');
    const wasChecked = hdbOption.checked;
    
    if (loanType === 'coupling' || loanType === 'equity') {
        hdbOption.disabled = true;
        const label = hdbOption.parentElement;
        label.classList.add('disabled');
        
        // Add click handler to the label
        label.onclick = (e) => {
            if (hdbOption.disabled) {
                e.preventDefault();
                toast.show(`HDB is not available for ${LOAN_DISPLAY_NAMES[loanType]}`, 'error');
            }
        };
        
        if (wasChecked) {
            const privateOption = document.querySelector('input[name="propertyType"][value="private"]');
            privateOption.checked = true;
            toast.show(`Property type has been automatically changed to Private`, 'info');
        }
    } else {
        hdbOption.disabled = false;
        const label = hdbOption.parentElement;
        label.classList.remove('disabled');
        label.onclick = null; // Remove click handler
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Handle initial URL parameters
    handleUrlParams();
    
    // Listen for loan type changes
    document.querySelectorAll('input[name="loanType"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            handlePropertyTypeRestrictions(e.target.value);
        });
    });
    
    // Listen for property type changes
    document.querySelectorAll('input[name="propertyType"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            validatePropertyTypeSelection(e);
        });
    });
});

function validatePropertyTypeSelection(e) {
    const loanType = document.querySelector('input[name="loanType"]:checked')?.value;
    if ((loanType === 'coupling' || loanType === 'equity') && e.target.value === 'hdb') {
        e.preventDefault();
        e.target.checked = false;
        toast.show(`HDB is not available for ${LOAN_DISPLAY_NAMES[loanType]}`, 'error');
    }
}


function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function initializeCustomSelect() {
    const customSelects = document.querySelectorAll('.custom-select-container');
    
    if (!customSelects.length) {
        console.warn('No custom select elements found');
        return;
    }
    
    customSelects.forEach(customSelect => {
        // Remove any existing initialization
        customSelect.dataset.initialized = 'false';
        
        let trigger = customSelect.querySelector('.select-trigger');
        const options = customSelect.querySelector('.select-options');
        const hiddenInput = customSelect.querySelector('input[type="hidden"]');
        
        if (!trigger || !options || !hiddenInput) {
            console.warn('Required elements missing for custom select');
            return;
        }

        // Always recreate the trigger structure
        const newTrigger = document.createElement('div');
        newTrigger.className = trigger.className;
        
        const selectedContent = document.createElement('div');
        selectedContent.className = 'selected-content';

        const iconDiv = document.createElement('div');
        iconDiv.className = 'input-group-icon';
        iconDiv.innerHTML = '🏦';

        const selectedText = document.createElement('span');
        selectedText.className = 'selected-text';
        selectedText.textContent = 'Select Bank';

        const logoImg = document.createElement('img');
        logoImg.className = 'selected-bank-logo';
        logoImg.alt = '';
        logoImg.style.display = 'none'; // Hide by default

        const arrowDiv = document.createElement('div');
        arrowDiv.className = 'select-arrow';

        selectedContent.appendChild(selectedText);
        selectedContent.appendChild(logoImg);

        newTrigger.appendChild(iconDiv);
        newTrigger.appendChild(selectedContent);
        newTrigger.appendChild(arrowDiv);

        // Replace old trigger with new one
        trigger.parentNode.replaceChild(newTrigger, trigger);
        trigger = newTrigger;

        // Clean up old event listeners
        const newOptions = options.cloneNode(true);
        options.parentNode.replaceChild(newOptions, options);

        // Handle trigger click
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            customSelects.forEach(other => {
                if (other !== customSelect) {
                    other.classList.remove('active');
                }
            });
            customSelect.classList.toggle('active');
        });

        // Handle option selection
        newOptions.addEventListener('click', (e) => {
            const option = e.target.closest('.select-option');
            if (option) {
                const value = option.dataset.value;
                const text = option.querySelector('span').textContent;
                const logoSrc = option.querySelector('img')?.src;

                hiddenInput.value = value;

                const selectedContent = trigger.querySelector('.selected-content');
                const selectedText = selectedContent.querySelector('.selected-text');
                const selectedLogo = selectedContent.querySelector('.selected-bank-logo');

                selectedText.textContent = text;

                if (logoSrc && value) {
                    selectedLogo.src = logoSrc;
                    selectedLogo.style.display = 'block';
                    customSelect.classList.add('has-selection');
                } else {
                    selectedLogo.src = '';
                    selectedLogo.style.display = 'none';
                    customSelect.classList.remove('has-selection');
                }

                customSelect.classList.remove('active');
                customSelect.classList.remove('error');

                const event = new Event('change', { bubbles: true });
                hiddenInput.dispatchEvent(event);
            }
        });

        // Mark as initialized
        customSelect.dataset.initialized = 'true';
    });

    // Global event listeners for closing selects
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.custom-select-container')) {
            customSelects.forEach(select => {
                select.classList.remove('active');
            });
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            customSelects.forEach(select => {
                select.classList.remove('active');
            });
        }
    });
}

// Add this to your existing JavaScript code
window.addEventListener('load', function() {
    let lastHeight = 0;
    
    function sendHeight() {
        const currentHeight = document.documentElement.scrollHeight;
        if (Math.abs(currentHeight - lastHeight) > 5) { // 5px threshold
            lastHeight = currentHeight;
            window.parent.postMessage({
                type: 'setHeight',
                height: currentHeight
            }, '*');
        }
    }

    // Send height on important events
    const events = ['load', 'resize', 'input', 'change'];
    events.forEach(event => {
        window.addEventListener(event, sendHeight);
    });

    // Watch for DOM changes
    const observer = new MutationObserver(sendHeight);
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true
    });

    // Handle height requests from parent
    window.addEventListener('message', function(event) {
        if (event.data.type === 'requestHeight') {
            sendHeight();
        }
    });

    // Initial height send
    sendHeight();
});
