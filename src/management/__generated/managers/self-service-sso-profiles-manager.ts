import * as runtime from '../../../lib/runtime.js';
import type { InitOverride, ApiResponse } from '../../../lib/runtime.js';
import type {
  DeleteMembersRequest,
  DeleteOrganizationMemberRolesRequest,
  GetEnabledConnections200Response,
  GetEnabledConnections200ResponseOneOfInner,
  GetInvitations200Response,
  GetInvitations200ResponseOneOfInner,
  GetMembers200Response,
  GetOrganizationMemberRoles200Response,
  GetOrganizations200Response,
  GetOrganizations200ResponseOneOfInner,
  PatchEnabledConnectionsByConnectionIdRequest,
  PatchOrganizationsByIdRequest,
  PostEnabledConnectionsRequest,
  PostInvitationsRequest,
  PostMembersRequest,
  PostOrganizationMemberRolesRequest,
  PostOrganizationsRequest,
  GetEnabledConnections200ResponseOneOf,
  GetInvitations200ResponseOneOf,
  GetMembers200ResponseOneOf,
  GetMembers200ResponseOneOfInner,
  GetOrganizationMemberRoles200ResponseOneOf,
  GetOrganizationMemberRoles200ResponseOneOfInner,
  GetOrganizations200ResponseOneOf,
  DeleteEnabledConnectionsByConnectionIdRequest,
  DeleteInvitationsByInvitationIdRequest,
  DeleteMembersOperationRequest,
  DeleteOrganizationMemberRolesOperationRequest,
  DeleteOrganizationsByIdRequest,
  GetEnabledConnectionsRequest,
  GetEnabledConnectionsByConnectionIdRequest,
  GetInvitationsRequest,
  GetInvitationsByInvitationIdRequest,
  GetMembersRequest,
  GetNameByNameRequest,
  GetOrganizationMemberRolesRequest,
  GetOrganizationsRequest,
  GetOrganizationsByIdRequest,
  PatchEnabledConnectionsByConnectionIdOperationRequest,
  PatchOrganizationsByIdOperationRequest,
  PostEnabledConnectionsOperationRequest,
  PostInvitationsOperationRequest,
  PostMembersOperationRequest,
  PostOrganizationMemberRolesOperationRequest, PostSsoProfilesRequest
} from '../models/index.js';
import { SsoProfilesResponse } from '../models/index.js';

const { BaseAPI } = runtime;

/**
 *
 */
export class SelfServiceSsoProfilesManager extends BaseAPI {

  /**
   * Create sso-profile.
   *
   * Create an SSO Profile
   *
   * @throws {RequiredError}
   */
  async create(
    bodyParameters: PostSsoProfilesRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<SsoProfilesResponse>> {
    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/self-service-profiles`,
        method: 'POST',
        headers: headerParameters,
        body: bodyParameters,
      },
      initOverrides
    );

    return runtime.JSONApiResponse.fromResponse(response);
  }
}
