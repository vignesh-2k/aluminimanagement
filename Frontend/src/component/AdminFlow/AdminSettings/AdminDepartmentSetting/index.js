// DepartmentSetting.jsx
import React, { useState } from 'react';
import { TopBar } from '../../../../layout/AdminFlow/Topbar';
import { Navbar } from '../../../../layout/AdminFlow/Navbar';
import { FaPlus, FaEdit, FaTrash, FaSearch } from 'react-icons/fa';
// import '../../../styles/Settings/DepartmentSetting.css';
import "../../../../styles/AdminFlow/AdminSettings/AdminDepartmentSetting.css"

const DepartmentSetting = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [departments, setDepartments] = useState([
    { id: 1, department: 'Computer Science', shortName: 'CS' },
    { id: 2, department: 'Mechanical Engineering', shortName: 'ME' }
  ]);
  const [newDepartment, setNewDepartment] = useState('');
  const [newShortName, setNewShortName] = useState('');
  const [editDepartmentId, setEditDepartmentId] = useState(null);
  const [editDepartment, setEditDepartment] = useState('');
  const [editShortName, setEditShortName] = useState('');
  const [deleteDepartmentId, setDeleteDepartmentId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesToShow, setEntriesToShow] = useState(10);

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => {
    setIsAddModalOpen(false);
    setNewDepartment('');
    setNewShortName('');
  };

  const openEditModal = (department) => {
    setEditDepartmentId(department.id);
    setEditDepartment(department.department);
    setEditShortName(department.shortName);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditDepartmentId(null);
    setEditDepartment('');
    setEditShortName('');
  };

  const openDeleteModal = (departmentId) => {
    setDeleteDepartmentId(departmentId);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteDepartmentId(null);
    setIsDeleteModalOpen(false);
  };

  const handleSave = () => {
    if (newDepartment.trim() !== '' && newShortName.trim() !== '') {
      const newDept = {
        id: departments.length + 1,
        department: newDepartment,
        shortName: newShortName
      };
      setDepartments([...departments, newDept]);
      closeAddModal();
    }
  };

  const handleUpdate = () => {
    if (editDepartment.trim() !== '' && editShortName.trim() !== '') {
      const updatedDepartments = departments.map((dept) =>
        dept.id === editDepartmentId
          ? { ...dept, department: editDepartment, shortName: editShortName }
          : dept
      );
      setDepartments(updatedDepartments);
      closeEditModal();
    }
  };

  const handleDelete = () => {
    const updatedDepartments = departments.filter((dept) => dept.id !== deleteDepartmentId);
    setDepartments(updatedDepartments);
    closeDeleteModal();
  };

  const filteredDepartments = departments
    .filter((dept) =>
      dept.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dept.shortName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, entriesToShow);

  return (
    <>
      <TopBar />
      <Navbar />

      <div className="ds-page">
        <div className="ds-page-header">
          <h2>Department Setting</h2>
        </div>

        <div className="ds-card">
          <div className="ds-top-controls">
            <div className="ds-left-controls">
              <div className="ds-search-box">
                <FaSearch className="ds-search-icon" />
                <input
                  type="text"
                  placeholder="Search department"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="ds-right-controls">
              <button className="ds-add-new-btn" onClick={openAddModal}>
                <FaPlus /> Add Department
              </button>
              <div className="ds-entries-select">
                Show
                <select
                  value={entriesToShow}
                  onChange={(e) => setEntriesToShow(Number(e.target.value))}
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
                entries
              </div>
            </div>
          </div>

          <table className="ds-table">
            <thead>
              <tr>
                <th>SL#</th>
                <th>Department</th>
                <th>Short Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredDepartments.map((dept, index) => (
                <tr key={dept.id}>
                  <td>{index + 1}</td>
                  <td>{dept.department}</td>
                  <td>{dept.shortName}</td>
                  <td className="ds-actions">
                    <button className="ds-edit-btn" onClick={() => openEditModal(dept)}>
                      <FaEdit />
                    </button>
                    <button className="ds-delete-btn" onClick={() => openDeleteModal(dept.id)}>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="ds-table-footer">
            <p>Showing 1 to {filteredDepartments.length} of {departments.length} entries</p>
            <div className="ds-pagination">
              <button>{'<<'}</button>
              <button className="active">1</button>
              <button>{'>>'}</button>
            </div>
          </div>
        </div>

        {/* Add Modal */}
        {isAddModalOpen && (
          <div className="ds-modal-overlay">
            <div className="ds-modal-content">
              <div className="ds-modal-header">
                <h3>Add Department</h3>
                <button className="ds-close-btn" onClick={closeAddModal}>×</button>
              </div>
              <div className="ds-modal-body">
                <div className="ds-floating-label">
                  <input
                    type="text"
                    value={newDepartment}
                    onChange={(e) => setNewDepartment(e.target.value)}
                    required
                    placeholder=" "
                  />
                  <label>Department <span className="ds-required-star">*</span></label>
                </div>
                <div className="ds-floating-label">
                  <input
                    type="text"
                    value={newShortName}
                    onChange={(e) => setNewShortName(e.target.value)}
                    required
                    placeholder=" "
                  />
                  <label>Short Name <span className="ds-required-star">*</span></label>
                </div>
              </div>
              <div className="ds-modal-footer">
                <button className="ds-save-update-btn" onClick={handleSave}>Save</button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Modal */}
        {isEditModalOpen && (
          <div className="ds-modal-overlay">
            <div className="ds-modal-content">
              <div className="ds-modal-header">
                <h3>Update Department</h3>
                <button className="ds-close-btn" onClick={closeEditModal}>×</button>
              </div>
              <div className="ds-modal-body">
                <div className="ds-floating-label">
                  <input
                    type="text"
                    value={editDepartment}
                    onChange={(e) => setEditDepartment(e.target.value)}
                    required
                    placeholder=" "
                  />
                  <label>Department <span className="ds-required-star">*</span></label>
                </div>
                <div className="ds-floating-label">
                  <input
                    type="text"
                    value={editShortName}
                    onChange={(e) => setEditShortName(e.target.value)}
                    required
                    placeholder=" "
                  />
                  <label>Short Name <span className="ds-required-star">*</span></label>
                </div>
              </div>
              <div className="ds-modal-footer">
                <button className="ds-save-update-btn" onClick={handleUpdate}>Update</button>
              </div>
            </div>
          </div>
        )}

        {/* Delete Modal */}
        {isDeleteModalOpen && (
          <div className="ds-modal-overlay">
            <div className="ds-delete-modal-content">
              <div className="ds-modal-body">
                <div className="ds-warning-icon">!</div>
                <h3>Sure! You want to delete?</h3>
                <p>You won't be able to revert this!</p>
                <div className="ds-delete-modal-footer">
                  <button className="ds-delete-confirm-btn" onClick={handleDelete}>
                    Yes, Delete It!
                  </button>
                  <button className="ds-delete-cancel-btn" onClick={closeDeleteModal}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DepartmentSetting;
