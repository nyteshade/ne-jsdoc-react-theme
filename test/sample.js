/**
 * A module for managing users in the system.
 * @module UserManager
 */

/**
 * Represents a user in the system.
 *
 * @class
 * @example
 * const user = new User('john', 'john@example.com');
 * console.log(user.displayName); // 'john'
 */
class User {
  /**
   * Create a new User instance.
   *
   * @param {string} name - The user's display name.
   * @param {string} email - The user's email address.
   * @param {Object} [options] - Additional options.
   * @param {string} [options.role='user'] - The user's role.
   * @param {boolean} [options.active=true] - Whether the account is active.
   */
  constructor(name, email, options = {}) {
    /** @type {string} */
    this.name = name;
    /** @type {string} */
    this.email = email;
    /** @type {string} */
    this.role = options.role || 'user';
    /** @type {boolean} */
    this.active = options.active !== false;
  }

  /**
   * The user's display name with role suffix.
   * @type {string}
   * @readonly
   */
  get displayName() {
    return `${this.name} (${this.role})`;
  }

  /**
   * Update the user's profile information.
   *
   * @param {Object} data - The fields to update.
   * @param {string} [data.name] - New display name.
   * @param {string} [data.email] - New email address.
   * @returns {User} The updated user instance.
   * @throws {Error} If no valid fields are provided.
   *
   * @example
   * user.updateProfile({ name: 'Jane', email: 'jane@example.com' });
   */
  updateProfile(data) {
    if (!data.name && !data.email) {
      throw new Error('At least one field must be provided');
    }
    if (data.name) this.name = data.name;
    if (data.email) this.email = data.email;
    return this;
  }

  /**
   * Check if the user has the specified role.
   *
   * @param {string} role - The role to check for.
   * @returns {boolean} True if the user has the role.
   * @since 1.2.0
   */
  hasRole(role) {
    return this.role === role;
  }

  /**
   * Convert user to a plain object.
   *
   * @returns {Object} A plain object representation.
   */
  toJSON() {
    return {
      name: this.name,
      email: this.email,
      role: this.role,
      active: this.active,
    };
  }

  /**
   * Create a User from a plain object.
   *
   * @static
   * @param {Object} data - The source data.
   * @param {string} data.name - The user's name.
   * @param {string} data.email - The user's email.
   * @param {string} [data.role] - The user's role.
   * @returns {User} A new User instance.
   *
   * @example
   * const user = User.fromJSON({ name: 'John', email: 'john@example.com' });
   */
  static fromJSON(data) {
    return new User(data.name, data.email, { role: data.role });
  }
}

/**
 * Service for managing a collection of users.
 *
 * @class
 * @example
 * const service = new UserService();
 * service.addUser(new User('admin', 'admin@example.com', { role: 'admin' }));
 */
class UserService {
  /**
   * Create a new UserService.
   */
  constructor() {
    /** @type {Map<string, User>} */
    this.users = new Map();
  }

  /**
   * Add a user to the service.
   *
   * @param {User} user - The user to add.
   * @returns {void}
   * @fires UserService#userAdded
   */
  addUser(user) {
    this.users.set(user.email, user);
  }

  /**
   * Find a user by email address.
   *
   * @async
   * @param {string} email - The email to search for.
   * @returns {Promise<User|null>} The found user or null.
   *
   * @example
   * const user = await service.findByEmail('john@example.com');
   * if (user) {
   *   console.log(user.displayName);
   * }
   */
  async findByEmail(email) {
    return this.users.get(email) || null;
  }

  /**
   * Get all users matching a filter.
   *
   * @param {Function} predicate - Filter function.
   * @returns {User[]} Array of matching users.
   */
  filter(predicate) {
    return Array.from(this.users.values()).filter(predicate);
  }

  /**
   * Remove a user by email.
   *
   * @param {string} email - The email of the user to remove.
   * @returns {boolean} True if the user was removed.
   * @deprecated Use {@link UserService#deactivate} instead.
   */
  removeUser(email) {
    return this.users.delete(email);
  }

  /**
   * Deactivate a user account instead of removing it.
   *
   * @param {string} email - The email of the user to deactivate.
   * @returns {boolean} True if the user was deactivated.
   * @since 2.0.0
   */
  deactivate(email) {
    const user = this.users.get(email);
    if (user) {
      user.active = false;
      return true;
    }
    return false;
  }

  /**
   * Event fired when a user is added.
   * @event UserService#userAdded
   * @type {Object}
   * @property {User} user - The added user.
   */
}

/**
 * Available user roles.
 * @typedef {('admin'|'user'|'moderator')} UserRole
 */

/**
 * Configuration for the user system.
 * @typedef {Object} UserConfig
 * @property {string} dbUrl - Database connection URL.
 * @property {number} [maxUsers=1000] - Maximum number of users.
 * @property {boolean} [enableAudit=false] - Enable audit logging.
 */

/**
 * Format a user's name for display.
 *
 * @param {string} firstName - First name.
 * @param {string} lastName - Last name.
 * @param {string} [format='full'] - Format style: 'full', 'short', or 'initials'.
 * @returns {string} The formatted name.
 *
 * @example
 * formatUserName('John', 'Doe');           // 'John Doe'
 * formatUserName('John', 'Doe', 'short');  // 'J. Doe'
 */
function formatUserName(firstName, lastName, format = 'full') {
  switch (format) {
    case 'short':
      return `${firstName[0]}. ${lastName}`;
    case 'initials':
      return `${firstName[0]}${lastName[0]}`;
    default:
      return `${firstName} ${lastName}`;
  }
}

/**
 * Default configuration values.
 * @constant
 * @type {UserConfig}
 */
const DEFAULT_CONFIG = {
  dbUrl: 'localhost:5432',
  maxUsers: 1000,
  enableAudit: false,
};

module.exports = { User, UserService, formatUserName, DEFAULT_CONFIG };
